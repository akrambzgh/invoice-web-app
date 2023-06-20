export class SwitchFilter {
  element: HTMLElement;
  navbarItems: HTMLElement[];
  checkbox: HTMLElement | null;
  fil: string;

  constructor(element: HTMLElement, navbarItems: HTMLElement[]) {
    this.element = element;
    this.navbarItems = navbarItems;
    this.checkbox = this.element.querySelector(".checkbox");
    this.fil = this.element.dataset.fil || "";
    this.element.addEventListener("click", this.switchFilter.bind(this));
  }

  switchFilter() {
    this.navbarItems.forEach((item) => {
      item.classList.remove("fil-selected");
    });
    this.element.classList.add("fil-selected");
  }
}
