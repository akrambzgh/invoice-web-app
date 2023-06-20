export class NavbarList {
  navbarButton: HTMLElement;
  navbarList: HTMLElement;

  constructor(navbarButton: HTMLElement, navbarList: HTMLElement) {
    this.navbarButton = navbarButton;
    this.navbarList = navbarList;
  }

  showNavbar() {
    this.navbarList.classList.toggle("show");
  }
}
