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