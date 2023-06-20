export default class SwitchFilter {
  constructor(element, navbarItems) {
    this.element = element;
    this.navbarItems = navbarItems;
    this.checkbox = this.element.querySelector(".checkbox");
    this.fil = this.element.dataset.fil;
    this.element.addEventListener("click", this.switchFilter.bind(this));
  }

  switchFilter() {
    this.navbarItems.forEach((item) => {
      item.classList.remove("fil-selected");
    });
    this.element.classList.add("fil-selected");
  }
}
