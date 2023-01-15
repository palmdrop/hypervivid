const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  // 'Access-Control-Allow-Origin': 'https://palmdrop.github.io',
  'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
  'Access-Control-Max-Age': '86400',
};

const times = {
  'milliseconds': 1,
  'seconds': 1000,
  'minutes': 1000 * 60,
  'hours': 1000 * 60 * 60,
  'days': 1000 * 60 * 60 * 24
} 

const dateOrStringToTime = date => {
  return typeof date === 'string'
    ? Date.parse(date)
    : date.valueOf();
}

// TODO: this is not reliable, does not take timezone or daylight savings into account!?
const getTimeDifference = (date1, date2, time) => {
  const differenceInMs = dateOrStringToTime(date2) - dateOrStringToTime(date1);
  const dividerInMs = times[time];
  return Math.round(differenceInMs / dividerInMs);
}

const processMatch = match => {
  const [
    ,
    datetime,
    year,
    month,
    day,
    hour,
    minute,
    content,
    note
  ] = match;

  const formattedDate = datetime.replace('T', ' ');

  return {
    metadata: {
      datetime,
      formattedDate,
      year,
      month,
      day,
      hour,
      minute
    },
    content,
    note,
    dayIndex: -1
  };
}

const processData = (data) => {
  // NOTE: matchall is slow, cache result and only redo it if document is stale!
  // TODO: implement pagination! do not process all data unless needed. Cache pages
  const entries = [...data.matchAll(entryParseRegex)]
    .map(match => processMatch(match));

  /*
  // Is this faster?
  const entries = data
    .split("#")
    .map(line => {
      const match = line.match(entryParseRegex);
      if(match) return processMatch(match);
      return undefined;
    })
    .filter(Boolean);
  */

  const firstDate = entries.at(0).metadata.datetime;
  const lastDate = entries.at(-1).metadata.datetime;

  const numberOfDays = 1 + getTimeDifference(
    firstDate, lastDate, 'days'
  );

  entries.forEach((entry, i) => {
    const dayIndex = getTimeDifference(
      entry.metadata.datetime, lastDate, 'days'
    );

    entry.dayIndex = dayIndex;
    const day = timeline[dayIndex];
    day.count++;
    day.entryIndices.push(i);

    if(day.datetime === '') {
      day.datetime = entry.metadata.datetime.split('T')[0];
    }
  });

  return {
    entries,
    numberOfDays
  }
}

export const onRequestGet = async ( context ) => {
  try {
    const {
      // request,
      env,
    } = context;
    
    const downloadLink = await env.ARTIFACTS.get( 'DOWNLOAD_LINK' );

    let result;

    result = await fetch(downloadLink, {
      method: 'GET',
      headers: {
        'content-type': 'text/plain;charset=UTF-8'
      }
    });

    if(result.ok) {
      const data = await result.text();
      const processedData = processData(data);

      return new Response(
        JSON.stringify(processedData),
        { 
          status: 200,
          headers: CORS_HEADERS
        }
      );
    } else {
      throw new Error();
    }
  } catch ( error ) {
    return new Response(
      JSON.stringify(error),
      { 
        status: 200,
        headers: CORS_HEADERS
      }
    )
  }
};