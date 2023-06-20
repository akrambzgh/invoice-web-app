export class NavbarList {
  navbarButton: HTMLElement | null;
  navbarList: HTMLElement | null;

  constructor(
    navbarButton: HTMLElement | null,
    navbarList: HTMLElement | null
  ) {
    this.navbarButton = navbarButton;
    this.navbarList = navbarList;
  }

  showNavbar() {
    this.navbarList?.classList.toggle("show");
  }
}
