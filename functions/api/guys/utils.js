/**
 * Thanks to Ben Nadel: https://gist.githubusercontent.com/bennadel/9753411/raw/a8e6f25f15fc78d1ef2d187e4f4864c4b528f885/code-1.htm
 * 
 * CSVToArray parses any String of Data including '\r' '\n' characters,
 * and returns an array with the rows of data.
 * @param {String} CSV_string - the CSV string you need to parse
 * @param {String} delimiter - the delimeter used to separate fields of data
 * @returns {Array} rows - rows of CSV where first row are column headers
 */
export function CSVToArray ( CSV_string, delimiter ) {
  delimiter = ( delimiter || ',' ); // user-supplied delimeter or default comma

  var pattern = new RegExp( // regular expression to parse the CSV values.
    ( // Delimiters:
      '(\\' + delimiter + '|\\r?\\n|\\r|^)' +
      // Quoted fields.
      '(?:"([^"]*(?:""[^"]*)*)"|' +
      // Standard fields.
      '([^"\\' + delimiter + '\\r\\n]*))'
    ), 'gi'
  );

  var rows = [ [] ]; // array to hold our data. First row is column headers.
  // array to hold our individual pattern matching groups:
  var matches = false; // false if we don't find any matches
  // Loop until we no longer find a regular expression match
  // eslint-disable-next-line no-cond-assign
  while ( matches = pattern.exec( CSV_string ) ) {
    var matched_delimiter = matches[1]; // Get the matched delimiter
    // Check if the delimiter has a length (and is not the start of string)
    // and if it matches field delimiter. If not, it is a row delimiter.
    if ( matched_delimiter.length && matched_delimiter !== delimiter ) {
      // Since this is a new row of data, add an empty row to the array.
      rows.push( [] );
    }
    var matched_value;
    // Once we have eliminated the delimiter, check to see
    // what kind of value was captured (quoted or unquoted):
    if ( matches[2] ) { // found quoted value. unescape any double quotes.
      matched_value = matches[2].replace(
        new RegExp( '""', 'g' ), '"'
      );
    } else { // found a non-quoted value
      matched_value = matches[3];
    }
    // Now that we have our value string, let's add
    // it to the data array.
    rows[rows.length - 1].push( matched_value );
  }
  return rows; // Return the parsed data Array
}


export const arrayToChunks = ( array, chunkSize ) => {
  if( !chunkSize || !array || !array.length ) return array;

  const chunks = [];
  for ( let i = 0; i < array.length; i += chunkSize ) {
    chunks.push( array.slice( i, i + chunkSize ) );
  }

  return chunks;
};