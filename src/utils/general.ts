import { clamp } from "../three/utils/math";

export const generateUUID = () => window.crypto.randomUUID();

export const noop = () => { return; };

export const nameToPath = ( name: string ) => {
  return name.replaceAll( ' ', '-' ).trim().toLowerCase();
};

type WeightedElement<T> = [
  element : T,
  weight : number
];

export const weightedRandomElement = <T>( elements : WeightedElement<T>[] ) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const sum = elements.reduce( ( acc, [ _, weight ] ) => acc + weight, 0.0 );
  const r = Math.random() * sum;

  let accumulator = 0.0;
  for( let i = 0; i < elements.length; i++ ) {
    accumulator += elements[ i ][ 1 ];
    if( accumulator >= r ) {
      return elements[ i ][ 0 ];
    }
  }

  return elements[ elements.length - 1 ][ 0 ];
};

export const smoothStep = ( value : number, min : number, max : number ) => {
  const t = clamp( ( value - min ) / ( max - min ), 0.0, 1.0 );
  return t * t * ( 3.0 - 2.0 * t );
};


export const getStringComparator = (
  reverse = false,
  ignoreCase = true,
) => {
  return (a: string, b: string) => {
    if (!ignoreCase) {
      a = a.toLowerCase();
      b = b.toLowerCase()
    }

    if(a < b) return reverse ? 1 : -1;
    if(a > b) return reverse ? -1 : 1;
    return 0;
  }
}

export const getLang = () => {
  if(typeof navigator !== 'undefined') {
    if(navigator.languages) return navigator.languages[0];
    if(navigator.language) return navigator.language;
  }

  return 'en-US';
}

export const formatDate = (
  dateString: string
) => {
  const date = new Date(dateString);
  const lang = getLang();
  return date.toLocaleDateString(
    lang, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
  );
}

export const wrapSlice = (
  value: string, 
  startIndex: number,
  stopIndex: number
) => {
  const maxCopies = Math.ceil(Math.max(
    Math.abs(startIndex), Math.abs(stopIndex)
  ));

  return Array(Math.ceil(maxCopies)).fill(value).join('').slice(
    startIndex,
    stopIndex > startIndex ? stopIndex : stopIndex + value.length
  );
}