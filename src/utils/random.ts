const random = ( min : number, max : number ) : number => {
  return Math.random() * ( max - min ) + min;
};

const randomElement = <T>( array : T[] ) : T => {
  return array[ Math.floor( Math.random() * array.length ) ];
};

export {
  random,
  randomElement
};