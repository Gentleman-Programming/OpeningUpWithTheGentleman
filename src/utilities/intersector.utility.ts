export interface CustomElement {
  element: Element;
  callBack: () => void;
};

class CustomIntersectionObserver {
  private observer: IntersectionObserver | null = null;
  private customEntries: CustomElement[] = [];

  private init() {
    if (typeof IntersectionObserver !== undefined)
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            this.interceptCallback(index);
          }
        });
      });

  }

  private interceptCallback(index: number) {
    this.customEntries[index].callBack();
  }

  observeElement(customElement: CustomElement) {
    this.customEntries.push(customElement);
    if (!this.observer) this.init();
    this.observer!.observe(customElement.element);
  }

  unobserveElement(customElement: CustomElement) {
    this.observer!.unobserve(customElement.element);
    this.customEntries = this.customEntries.filter(
      (customElement) => JSON.stringify(customElement.element) !== JSON.stringify(customElement.element))
  }
}

export const customIntersectionObserver = new CustomIntersectionObserver();
