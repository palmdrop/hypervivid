export const scrollSelfIntoView = (
  event: (UIEvent & { currentTarget: HTMLElement | null }) | null
) => {
  if(event && event.currentTarget) {
    event.currentTarget.scrollIntoView({
      behavior: 'smooth'
    });
  }
}

export const scrollIntoView = (
  selector: string
) => {
  const elements = document.getElementsByClassName(selector);
  if(!elements.length) return;

  const element = elements[0];

  element.scrollIntoView({
    behavior: 'smooth'
  });
}