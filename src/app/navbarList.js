export default class NavbarList {
  constructor(navbarButton, navbarList) {
    this.navbarButton = navbarButton;
    this.navbarList = navbarList;
  }

  showNavbar() {
    this.navbarList.classList.toggle("show");
  }
}
