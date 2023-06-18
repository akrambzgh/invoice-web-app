import "./scss/main.scss";
import rightArrowIcon from "./assets/icon-arrow-right.svg";
import leftArrowIcon from "./assets/icon-arrow-left.svg";
import sunIcon from "./assets/icon-sun.svg";
import moonIcon from "./assets/icon-moon.svg";

// Open And Close Filer Navigation
class NavbarList {
  public navbarButton: any;
  public navbarList: any;

  constructor(navbarButton: any, navbarList: any) {
    this.navbarButton = navbarButton;
    this.navbarList = navbarList;
  }

  showNavbar() {
    this.navbarList.classList.toggle("show");
  }
}

// Switch Chosed Filter
class SwitchFilter {
  public element: any;
  public checkbox: any;
  public fil: any;

  constructor(element: any) {
    this.element = element;
    this.checkbox = this.element.querySelector(".checkbox");
    this.fil = this.element.dataset.fil;
    this.element.addEventListener("click", this.switchFilter.bind(this));
  }

  switchFilter() {
    navbarItems.forEach((item: any) => {
      item.classList.remove("fil-selected");
    });
    this.element.classList.add("fil-selected");
  }
}

const navbarButton = document.querySelector(".filter-invoices h2");
const navbarUl = document.querySelector(".filter-invoices__list");
const navbarItems = document.querySelectorAll(".filter-invoices__list__filter");

navbarItems.forEach((item: any) => new SwitchFilter(item));
const navbarList = new NavbarList(navbarButton, navbarUl);

navbarButton?.addEventListener("click", () => {
  navbarList.showNavbar();
});

class RandomCodeGenerator {
  generateRandomCode() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters.charAt(randomIndex);
    }
    return code;
  }
}

// Shared instance of RandomCodeGenerator
const randomCodeGenerator = new RandomCodeGenerator();

// Create Invoice Elements
class CreateInvoiceElement {
  public clientNameInput: any;
  public totalPrice: any;

  constructor(clientNameInput: any, totalPrice: any) {
    this.clientNameInput = clientNameInput;
    this.totalPrice = totalPrice;
  }

  makeInvoiceElement() {
    const allInvoiceElements = document.querySelectorAll(".invoices__element");
    let num = allInvoiceElements.length + 1;
    const invoicesContainer = document.querySelector(".invoices");
    let invoiceElementMarkup = `
    <div class="invoices__element" data-invoice="num${num}" data-filter="pending">
      <h3 class="invoices__element__id">
        <span class="hash">#</span>${randomCodeGenerator.generateRandomCode()}
      </h3>
      <h4>due 19 aug 2021</h4>
      <h5>${this.clientNameInput.value}</h5>
      <h1>${this.totalPrice.textContent}</h1>
      <div class="status pending">
        <div class="status__circle"></div>
          <h3 class="status__text">pending</h3>
        </div>
      <img src="${rightArrowIcon}" alt="" class="arrow-img" />
    </div>`;
    invoicesContainer.innerHTML += invoiceElementMarkup;
  }
}

class InvoiceInof extends CreateInvoiceElement {
  constructor(
    clientNameInput: HTMLInputElement,
    totalPrice: HTMLSpanElement,
    private billFromStreetAddressInput: HTMLInputElement,
    private billFromCityInput: HTMLInputElement,
    private billFromPostCardInput: HTMLInputElement,
    private billFromCountryInput: HTMLInputElement,
    private clientEmailInput: HTMLInputElement,
    private clientStreetAddressInput: HTMLInputElement,
    private clientCityInput: HTMLInputElement,
    private clientPostCardInput: HTMLInputElement,
    private clientCountryInput: HTMLInputElement,
    private invoiceDateInput: HTMLInputElement,
    private itemNameInput: HTMLInputElement,
    private qtyInput: HTMLInputElement,
    private priceInput: HTMLInputElement
  ) {
    super(clientNameInput, totalPrice);
  }

  invoceInfoGenerator(): void {
    const allInvoiceElements = document.querySelectorAll(".invoices__element");
    let num = allInvoiceElements.length;
    const infoContainer = document.querySelector(".invoice-info-container");
    let invoiceInofMarkup = `<div class="invoice-info"data-invoice-info="num${num}"><div class="go-back"><span><img src="${leftArrowIcon}"alt=""/> go back</span></div><div class="invoice-info__header"><div class="left"><span>status</span><div class="status pending"><div class="status__circle"></div><h3 class="status__text">Pending</h3></div></div><div class="right"><div class="edit"><button class="edit__button button">edit</button></div><div class="delete"><button class="delete__button button">delete</button></div><div class="make-as"><button class="make-as__button button">Makse As Paid</button></div></div></div><div class="invoice-info__details"><div class="details"><div class="details__general"><div class="left"><h1><span class="hash">#</span>${randomCodeGenerator.generateRandomCode()}</h1><span class="name">${
      this.clientNameInput.value
    }</span></div><div class="right"><span>${
      this.billFromStreetAddressInput.value
    }</span><span>${this.billFromCityInput.value}</span><span>${
      this.billFromPostCardInput.value
    }</span><span>${
      this.billFromCountryInput.value
    }</span></div></div><div class="details__detailed"><div class="dates"><div class="invoice-date"><span>invoice date</span><h1class="date-text">aug 18, 2021</h1></div><div class="payment-due"><span>payment Due</span><h1class="date-text">aug 19, 2021</h1></div></div><div class="bill-to-details"><h3 class="bill-to-name">${
      this.clientNameInput.value
    }</h3><div class="bill-to-details"><span>${
      this.clientStreetAddressInput.value
    }</span><span>${this.clientCityInput.value}</span><span>${
      this.clientPostCardInput.value
    }</span><span>${
      this.clientCountryInput.value
    }</span></div></div><div class="sent-to-details"><span>sentto</span><h3>${
      this.clientEmailInput.value
    }</h3></div></div></div><div class="items"><div class="items__list"><div class="items__list__item"><div class="items__list__item-name"><span class="item-name-title">item name</span><h3>${
      this.itemNameInput.value
    }</h3></div><div class="items__list__item__quantity"><span class="item-qty-title">qty</span><h3>${
      this.qtyInput.value
    }</h3></div><div class="items__list__item__item-price"><span class="item-price-title">item price</span><h3>£${
      this.priceInput.value
    }</h3></div><div class="items__list__item__item-total"><span class="item-total-title">total</span><h3>£${
      parseInt(this.qtyInput.value) * parseInt(this.priceInput.value)
    }</h3></div></div></div><div class="items__total-price"><h1>ammount due</h1><h1>£${
      parseInt(this.qtyInput.value) * parseInt(this.priceInput.value)
    }</h1></div></div></div>`;

    infoContainer.innerHTML += invoiceInofMarkup;
  }
}

// Rest of the code...

// Variables for buttons and inputs
const saveInvoiceButton = document.querySelector(
  ".save__button"
) as HTMLButtonElement;
const createNewInvoiceButton = document.querySelector(
  ".create-invoices__button"
) as HTMLButtonElement;
const createInvoiceSection = document.querySelector(
  ".create-invoice"
) as HTMLDivElement;
const overlayer = document.querySelector(".overlayer") as HTMLDivElement;
const billFromStreetAddressInput = document.querySelector(
  "#bill-from-street-address"
) as HTMLInputElement;
// Rest of the variables go here

// Function for invoice events (number/info/delete/edit)
function invoiceEvents(): void {
  const allInvoiceElements = document.querySelectorAll(".invoices__element");
  let allInvoiceElementsNumber = allInvoiceElements.length;
  invoicesNumber.textContent = allInvoiceElementsNumber;
  const goBackButtons = document.querySelectorAll(".go-back");
  const allInvoiceInfoElements = document.querySelectorAll(".invoice-info");
  const deleteInvoiceButtons = document.querySelectorAll(".delete__button");

  allInvoiceElements.forEach((invoice) => {
    invoice.addEventListener("click", () => {
      const allInvoiceInfoElements = document.querySelectorAll(".invoice-info");
      const allInvoiceElements =
        document.querySelectorAll(".invoices__element");
      allInvoiceInfoElements.forEach((info) => {
        if (invoice.dataset.invoice === info.dataset.invoiceInfo) {
          info.classList.add("show");
          mainSection.style.opacity = "0";
        }
      });
    });
  });
  goBackButtons.forEach((button) => {
    button.addEventListener("click", () => {
      allInvoiceInfoElements.forEach((info) => {
        info.classList.remove("show");
      });
      mainSection.style.opacity = "1";
    });
  });
  deleteInvoiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
      let deletedInvoice =
        button.parentElement.parentElement.parentElement.parentElement;
      allInvoiceElements.forEach((invoice) => {
        if (deletedInvoice.dataset.invoiceInfo === invoice.dataset.invoice) {
          invoice.remove();
          deletedInvoice.classList.remove("show");
          mainSection.style.opacity = "1";
          deletedInvoice.remove();
        }
      });
      invoicesNumber.textContent -= 1;
    });
  });
}

invoiceEvents();

saveInvoiceButton.addEventListener("click", () => {
  const createInvoiceElement = new CreateInvoiceElement(
    clientNameInput,
    totalPrice
  );
  const invoiceInfo = new InvoiceInof(
    clientNameInput,
    totalPrice,
    billFromStreetAddressInput,
    billFromCityInput,
    billFromPostCardInput,
    billFromCountryInput,
    clientEmailInput,
    clientStreetAddressInput,
    clientCityInput,
    clientPostCardInput,
    clientCountryInput,
    invoiceDateInput,
    itemNameInput,
    qtyInput,
    priceInput
  );
  createInvoiceElement.makeInvoiceElement();
  invoiceInfo.invoceInfoGenerator();
  createInvoiceSection.classList.remove("show");
  overlayer.classList.remove("show");
  invoiceEvents();
});

createNewInvoiceButton.addEventListener("click", () => {
  createInvoiceSection.classList.add("show");
  overlayer.classList.add("show");
});

overlayer.addEventListener("click", () => {
  createInvoiceSection.classList.remove("show");
  overlayer.classList.remove("show");
});

// Filter Invoice Items
class FilterInvoices {
  constructor(
    private allFilters: NodeListOf<Element>,
    private removeFilterButton: HTMLElement,
    private filtersList: HTMLElement
  ) {
    this.allFilters.forEach((filter) => {
      filter.addEventListener("click", () => {
        this.filterInvoices(filter);
      });
    });

    this.removeFilterButton.addEventListener("click", () => {
      this.removeAllFilters();
    });
  }

  filterInvoices(filter: Element): void {
    const allInvoiceElements = document.querySelectorAll(".invoices__element");
    allInvoiceElements.forEach((invoice) => {
      if (!filter.classList.contains("fil-selected")) {
        invoice.style.display = "flex";
      } else {
        if (filter.dataset.fil !== invoice.dataset.filter) {
          invoice.style.display = "none";
        } else {
          invoice.style.display = "flex";
        }
      }
    });
  }

  removeAllFilters(): void {
    const allInvoiceElements = document.querySelectorAll(".invoices__element");
    allInvoiceElements.forEach((invoice) => {
      invoice.style.display = "flex";
    });

    this.allFilters.forEach((filter) => {
      filter.classList.remove("fil-selected");
    });

    this.filtersList.classList.remove("show");
  }
}

const removeFilterButton = document.querySelector(
  ".filter-invoices__list__remove-filter"
) as HTMLElement;

const navbarItems = document.querySelectorAll(".navbar__item");
const navbarUl = document.querySelector(".navbar__ul") as HTMLElement;

const filterInvoices = new FilterInvoices(
  navbarItems,
  removeFilterButton,
  navbarUl
);

// Change Invoice Status
class Status {
  constructor(
    private setStatusButton: HTMLElement,
    private infostausMark: HTMLElement,
    private invoiceStatusMark: HTMLElement
  ) {
    this.setStatusButton.addEventListener("click", () => {
      this.setStatus();
    });
  }

  setStatus(): void {
    let invoiceInfoToSetStatus =
      button.parentElement.parentElement.parentElement.parentElement;
    const allInvoiceElements = document.querySelectorAll(".invoices__element");
    let infoStatusMarkEle = invoiceInfoToSetStatus.querySelector(".status");
    let infoStatusMarkText = infoStatusMarkEle.querySelector(".status__text");
    infoStatusMarkEle.classList.remove("pending");
    infoStatusMarkEle.classList.add("paid");
    infoStatusMarkText.textContent = "Paid";
    allInvoiceElements.forEach((invoice) => {
      if (
        invoiceInfoToSetStatus.dataset.invoiceInfo === invoice.dataset.invoice
      ) {
        invoice.dataset.filter = "paid";
        let invoiceElementStatusMark = invoice.querySelector(".status");
        let invoiceElementStatusText =
          invoiceElementStatusMark.querySelector(".status__text");
        invoiceElementStatusMark.classList.remove("pending");
        invoiceElementStatusMark.classList.add("paid");
        invoiceElementStatusText.textContent = "Paid";
      }
    });
  }
}

const setStatusButton = document.querySelector(
  ".make-as__button"
) as HTMLElement;

const status = new Status(setStatusButton);

// Light/Dark Mode
const themeToggleButton = document.querySelector(".mode-switch") as HTMLElement;
const themeImage = document.querySelector(
  ".mode-switch__img"
) as HTMLImageElement;
const bodyElement = document.body;

themeToggleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark-mode");
  themeImage.style.transform += "rotate(360deg)";
  if (bodyElement.classList.contains("dark-mode")) {
    themeImage.src = sunIcon;
  } else {
    themeImage.src = moonIcon;
  }
});
