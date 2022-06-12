export const insideRect = ( point : { x : number, y : number }, rect : DOMRect ) : boolean => {
  return point.x >= rect.left && point.x < rect.right && point.y >= rect.top && point.y < rect.bottom;
};
