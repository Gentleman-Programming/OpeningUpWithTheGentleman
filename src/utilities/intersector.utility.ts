export interface CustomElement {
	element: Element;
	callBack: () => void;
}

class CustomIntersectionObserver {
	private observer: IntersectionObserver | null = null;
	private customEntries = new Map<string, CustomElement>();

	private init() {
		if (typeof window === 'undefined') return;
		this.observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				for (const [_, customElement] of this.customEntries.entries()) {
					if (customElement.element !== entry.target) continue;
					customElement.callBack();
					break;
				}
			});
		});
	}

	observeElement(customElement: CustomElement) {
		const id = crypto.randomUUID();
		this.customEntries.set(id, customElement);
		if (!this.observer) this.init();
		this.observer!.observe(customElement.element);
		return id;
	}

	unobserveElement(id: string) {
		const customElement = this.customEntries.get(id);
		if (!customElement) return;
		this.observer!.unobserve(customElement.element);
		this.customEntries.delete(id);
	}
}

export const customIntersectionObserver = new CustomIntersectionObserver();
