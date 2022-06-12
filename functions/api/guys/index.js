import { 
  CACHE_STATUS, 
  CORS_HEADERS, 
  DOCUMENT_CACHE_TTL, 
  EDGE_CACHE_TTL, 
  ENTRIES_PER_PAGE, 
  ENTRY_COUNT_KEY, 
  LAST_UPDATE_KEY, 
  PAGE_COUNT_KEY, 
  PAGE_PREFIX, 
  PUBLISH_INDICATORS, 
  RETRY_TIMEOUT,
  STARTING_YEAR,
  YEAR_REGEX,
  MONTH_DAY_REGEX
} from './constants';

import { arrayToChunks, CSVToArray } from './utils';

/**
 * FETCH DOCUMENT
 */

const fetchDocumentCSV = async ( env ) => {
  const sheetId = await env.GUYS.get( 'SHEET_ID' );
  const sheetName = await env.GUYS.get( 'SHEET_NAME' );
  const url = `https://docs.google.com/spreadsheets/d/${ sheetId }/gviz/tq?tqx=out:csv&headers=0&sheet=${ sheetName }`;

  const result = await fetch( url, {
    'content-type': 'text/csv;charset=UTF-8'
  } );

  const csvData = await result.text();

  return csvData;
};

/**
 * PARSE DOCUMENT DATA
 */

const getNumberOfColumns = ( headerRow ) => {
  let count = 0;
  while( 
    count < headerRow.length && 
    headerRow[count] 
  ) count++;

  return count - 1; // Exclude publish column
};

const processData = ( arrayData ) => {
  const numberOfColumns = getNumberOfColumns( arrayData[ 0 ] );

  const toPublish = ( row ) => {
    // Cells at column 0 indicate if to publish or not
    return row[ 0 ] && PUBLISH_INDICATORS.includes( row[ 0 ].toLowerCase() );
  };

  // Since full date is not included in date column, it has to be calculated using special "year" row
  let currentYear = STARTING_YEAR;
  const processedData = arrayData
    .map( 
      row => {
        const publish = toPublish( row );

        const date = '' + row[ 1 ];
        if( !publish && YEAR_REGEX.test( date ) ) {
          currentYear = date;
        } else if( publish ) { // Only bother to create complete dates for guys that will be published
          const matches = date.match( MONTH_DAY_REGEX );
          if( matches && matches.length >= 3 ) {
            const day = matches[ 1 ];
            const month = matches[ 2 ];
            row[ 1 ] = `${ day } ${ month }, ${ currentYear }`;
          } else {
            row[ 1 ] = currentYear; // fallback to current year if date cannot be 
          }
        }

        return row;
      } 
    )
    .filter( 
      ( row, i ) => {
        if( i === 0 ) return false;
        return toPublish( row );
      } 
    ).map( 
      row => {
        const date = row[ 1 ];
        const content = row.slice( 2, numberOfColumns + 1 );
        return {
          date,
          content
        };
      }
    );

  return processedData;
};

/**
 * CACHE
 */

const getDocumentCacheStatus = async ( env ) => {
  const lastUpdate = await env.GUYS_DATA.get( LAST_UPDATE_KEY );
  if( !lastUpdate ) return CACHE_STATUS.none;
  
  const now = Date.now();
  const timeSinceLastUpdate = now - lastUpdate;

  if ( timeSinceLastUpdate > ( DOCUMENT_CACHE_TTL * 1000 ) ) return CACHE_STATUS.stale;
  else return CACHE_STATUS.valid;
};

/**
 * UPDATE KV STORAGE 
 */
const updateKvStorage = async ( env ) => {
  // TODO use API to store data instead

  const csvData = await fetchDocumentCSV( env );
  const arrayData = CSVToArray( csvData );
  const processedData = processData( arrayData );
  const chunkedData = arrayToChunks( processedData, ENTRIES_PER_PAGE );

  const numberOfEntries = processedData.length;
  const numberOfPages = chunkedData.length;
  const now = Date.now();

  await env.GUYS_DATA.put( ENTRY_COUNT_KEY, numberOfEntries, { cacheTtl: EDGE_CACHE_TTL } );
  await env.GUYS_DATA.put( PAGE_COUNT_KEY, numberOfPages, { cacheTtl: EDGE_CACHE_TTL } );

  for( let i = 0; i < numberOfPages; i++ ) {
    await env.GUYS_DATA.put( 
      `${ PAGE_PREFIX }${ i }`, 
      JSON.stringify( chunkedData[ i ] ), 
      { cacheTtl: EDGE_CACHE_TTL } 
    );
  }

  await env.GUYS_DATA.put( LAST_UPDATE_KEY, now );

  // TODO: Error handling, what to do if something fails... not update LAST_UPDATE_KEY? force others to refetch

  return {
    numberOfEntries,
    pages: chunkedData
  };
};

const readKvStorage = async ( env ) => {
  const numberOfEntries = await env.GUYS_DATA.get( ENTRY_COUNT_KEY );
  const numberOfPages = await env.GUYS_DATA.get( PAGE_COUNT_KEY );
  const pages = [];

  for( let i = 0; i < numberOfPages; i++ ) {
    const page = await env.GUYS_DATA.get( `${ PAGE_PREFIX }${ i }`, { type: 'json' } );
    pages.push( page );
  }

  return {
    numberOfEntries,
    pages
  };
};


export const onRequestGet = async ( context ) => {
  const {
    // request,
    env
  } = context;

  let response;
  try {
    const documentCacheStatus = await getDocumentCacheStatus( env );

    let data;
    // TODO: reset cacheTTL on stale fetch, so next fetch will be fresh

    if( documentCacheStatus === CACHE_STATUS.valid ) {
      data = await readKvStorage( env );
    } else if( documentCacheStatus === CACHE_STATUS.stale ) {
      data = await readKvStorage( env );

      // TODO: Use actual cache api
      context.waitUntil(
        updateKvStorage( env )
      );
    } else {
      data = await updateKvStorage( env );
    }

    response = new Response(
      JSON.stringify( {
        cacheStatus: documentCacheStatus,
        cacheTTL: DOCUMENT_CACHE_TTL,
        retryTimeout: documentCacheStatus === CACHE_STATUS.stale ? RETRY_TIMEOUT : undefined,
        data,
      } ),
      {
        status: 200,
        headers: CORS_HEADERS,
      }
    );
  } catch ( error ) {
    response = new Response(
      JSON.stringify( {
        retryTimeout: RETRY_TIMEOUT,
        error 
      } ),
      {
        status: 400,
        headers: CORS_HEADERS,
      } 
    );
  }

  return response;
};