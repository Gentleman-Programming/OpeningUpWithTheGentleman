export interface CustomElement {
  element: Element;
  callBack: () => void;
};

class CustomIntersectionObserver {
  private observer: IntersectionObserver | null = null;
  private customEntries: Map<string, CustomElement> = new Map();

  private init() {
    console.log('init');
    if (typeof IntersectionObserver !== undefined)
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.interceptCallback();
          }
        });
      });

  }

  private interceptCallback(id: string) {
    this.customEntries.get(id)?.callBack();
  }

  observeElement(customElement: CustomElement) {
    const id = crypto.randomUUID();
    this.customEntries.set(id, customElement);
    if (!this.observer) this.init();
    this.observer!.observe(customElement.element);
    return id;
  }

  unobserveElement(id: string) {
    console.log('deleted');
    this.observer!.unobserve(this.customEntries.get(id)!.element);
    this.customEntries.delete(id);
  }
}

export const customIntersectionObserver = new CustomIntersectionObserver();
