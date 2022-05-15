export const scrollIntoView = (
  event: (UIEvent & { currentTarget: HTMLElement | null }) | null
) => {
  if(event && event.currentTarget) {
    event.currentTarget.scrollIntoView({
      behavior: 'smooth'
    });
  }
}