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