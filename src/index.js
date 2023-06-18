import "./scss/main.scss";
import rightArrowIcon from "./assets/icon-arrow-right.svg";
import leftArrowIcon from "./assets/icon-arrow-left.svg";
import sunIcon from "./assets/icon-sun.svg";
import moonIcon from "./assets/icon-moon.svg";

// Open And Close Filer Navigation
class NavbarList {
  constructor(navbarButton, navbarList) {
    this.navbarButton = navbarButton;
    this.navbarList = navbarList;
  }

  showNavbar() {
    this.navbarList.classList.toggle("show");
  }
}

// Switch Chosed Filter
class SwitchFilter {
  constructor(element) {
    this.element = element;
    this.checkbox = this.element.querySelector(".checkbox");
    this.fil = this.element.dataset.fil;
    this.element.addEventListener("click", this.switchFilter.bind(this));
  }

  switchFilter() {
    navbarItems.forEach((item) => {
      item.classList.remove("fil-selected");
    });
    this.element.classList.add("fil-selected");
  }
}

// Create Invoice Elements
class CreateInvoiceElement {
  constructor(
    clientNameInput,
    totalPrice,
    invoiceDateInput,
    qtyInput,
    priceInput
  ) {
    this.clientNameInput = clientNameInput;
    this.totalPrice = totalPrice;
    this.invoiceDateInput = invoiceDateInput;
    this.qtyInput = qtyInput;
    this.itemPriceInput = priceInput;
  }

  static generateRandomCode() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters.charAt(randomIndex);
    }
    return code;
  }

  makeInvoiceElement() {
    const allInvoiceElements = document.querySelectorAll(".invoices__element");
    let num = allInvoiceElements.length + 1;
    const invoicesContainer = document.querySelector(".invoices");
    let invoiceElementMarkup = `
    <div class="invoices__element" data-invoice="num${num}" data-filter="pending">
      <h3 class="invoices__element__id">
        <span class="hash">#</span>${CreateInvoiceElement.generateRandomCode()}
      </h3>
      <h4>due ${this.invoiceDateInput.value}</h4>
      <h5>${this.clientNameInput.value}</h5>
      <h1>£${
        parseInt(this.qtyInput.value) * parseInt(this.itemPriceInput.value)
      }</h1>
      <div class="status pending">
        <div class="status__circle"></div>
          <h3 class="status__text">pending</h3>
        </div>
      <img src="${rightArrowIcon}" alt="" class="arrow-img" />
    </div>`;
    invoicesContainer.innerHTML += invoiceElementMarkup;
  }
}

// Create Inovoice Info Section
class InvoiceInof extends CreateInvoiceElement {
  constructor(
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
    invoiceTermDateInput,
    itemNameInput,
    qtyInput,
    priceInput
  ) {
    super(clientNameInput, totalPrice);
    this.billFromStreetAddressInput = billFromStreetAddressInput;
    this.billFromCityInput = billFromCityInput;
    this.billFromPostCardInput = billFromPostCardInput;
    this.billFromCountryInput = billFromCountryInput;
    this.clientEmailInput = clientEmailInput;
    this.clientStreetAddressInput = clientStreetAddressInput;
    this.clientCityInput = clientCityInput;
    this.clientPostCardInput = clientPostCardInput;
    this.clientCountryInput = clientCountryInput;
    this.invoiceDateInput = invoiceDateInput;
    this.invoiceTermDateInput = invoiceTermDateInput;
    this.itemNameInput = itemNameInput;
    this.qtyInput = qtyInput;
    this.priceInput = priceInput;
  }

  invoceInfoGenerator() {
    const allInvoiceElements = document.querySelectorAll(".invoices__element");
    let num = allInvoiceElements.length;
    const infoContainer = document.querySelector(".invoice-info-container");
    let invoiceInofMarkup = `<div class="invoice-info"data-invoice-info="num${num}"><div class="go-back"><span><img src="${leftArrowIcon}"alt=""/> go back</span></div><div class="invoice-info__header"><div class="left"><span>status</span><div class="status pending"><div class="status__circle"></div><h3 class="status__text">Pending</h3></div></div><div class="right"><div class="edit"><button class="edit__button button">edit</button></div><div class="delete"><button class="delete__button button">delete</button></div><div class="make-as"><button class="make-as__button button">Makse As Paid</button></div></div></div><div class="invoice-info__details"><div class="details"><div class="details__general"><div class="left"><span class="name">${
      this.clientNameInput.value
    }</span></div><div class="right"><span class="bill-from-street-address-txt">${
      this.billFromStreetAddressInput.value
    }</span><span class="bill-from-city-txt">${
      this.billFromCityInput.value
    }</span><span class="bill-from-post-card-txt">${
      this.billFromPostCardInput.value
    }</span><span class="bill-from-country-txt">${
      this.billFromCountryInput.value
    }</span></div></div><div class="details__detailed"><div class="dates"><div class="invoice-date"><span>invoice date</span><h1 class="date-text inv-date">${
      this.invoiceDateInput.value
    }</h1></div><div class="payment-due"><span>payment Due</span><h1 class="date-text pay-date">${
      this.invoiceTermDateInput.value
    }</h1></div></div><div class="bill-to-details"><div class="bill-to-details"><span class="bill-to-street-address-txt">${
      this.clientStreetAddressInput.value
    }</span><span class="bill-to-city-txt">${
      this.clientCityInput.value
    }</span><span class="bill-from-post-card-txt">${
      this.clientPostCardInput.value
    }</span><span class="bill-to-country-txt">${
      this.clientCountryInput.value
    }</span></div></div><div class="sent-to-details"><span>sent to</span><h3 class="bill-to-email-txt">${
      this.clientEmailInput.value
    }</h3></div></div></div><div class="items"><div class="items__list"><div class="items__list__item"><div class="items__list__name"><span class="item-name-title">item name</span><h3 class="item-name-txt">${
      this.itemNameInput.value
    }</h3></div><div class="items__list__item__quantity"><span class="item-qty-title">qty</span><h3 class="item-qty-txt">${
      this.qtyInput.value
    }</h3></div><div class="items__list__item__price"><span class="item-price-title">item price</span><h3 class="item-price-txt">£${
      this.priceInput.value
    }</h3></div><div class="items__list__item__total"><span class="item-total-title">total</span><h3 class="item-total-txt">£${
      parseInt(this.qtyInput.value) * parseInt(this.priceInput.value)
    }</h3></div></div></div><div class="items__total-price"><h1>ammount due</h1><h1>£${
      parseInt(this.qtyInput.value) * parseInt(this.priceInput.value)
    }</h1></div></div></div>`;

    infoContainer.innerHTML += invoiceInofMarkup;
  }
}

// Change Invoice Status
class Status {
  constructor(setStatusButtons) {
    this.setStatusButtons = setStatusButtons;
    this.setStatusButtons.forEach((button) => {
      button.addEventListener("click", () => {
        this.setStatus(button);
      });
    });
  }
  setStatus(button) {
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

class EditIvoice {
  constructor(
    editInvoiceButtons,
    editInvoiceSection,
    createInvoiceSection,
    editClientEmailInput,
    editClientCityInput,
    editClientCountryInput,
    editClientPostCardInput,
    editClientStreetAddressInput,
    editClientNameInput,
    editBillFromCityInput,
    editBillFromCountryInput,
    editBillFromPostCardInput,
    editBillFromStreetAddressInput,
    itemNameInput,
    itemPriceInput,
    itemQtyInput,
    itemTotalSec
  ) {
    this.editInvoiceButtons = editInvoiceButtons;
    this.editInvoiceSection = editInvoiceSection;
    this.createInvoiceSection = createInvoiceSection;
    this.editClientEmailInput = editClientEmailInput;
    this.editClientCityInput = editClientCityInput;
    this.editClientCountryInput = editClientCountryInput;
    this.editClientPostCardInput = editClientPostCardInput;
    this.editClientStreetAddressInput = editClientStreetAddressInput;
    this.editClientNameInput = editClientNameInput;
    this.editBillFromCityInput = editBillFromCityInput;
    this.editBillFromCountryInput = editBillFromCountryInput;
    this.editBillFromPostCardInput = editBillFromPostCardInput;
    this.editBillFromStreetAddressInput = editBillFromStreetAddressInput;
    this.itemNameInput = itemNameInput;
    this.itemPriceInput = itemPriceInput;
    this.itemQtyInput = itemQtyInput;
    this.itemTotalSec = itemTotalSec;
    this.editInvoiceButtons.forEach((button) => {
      button.addEventListener("click", () => {
        this.takeInfoTexts(button);
      });
    });
  }
  takeInfoTexts(button) {
    // Elements
    const buttonParentDiv =
      button.parentElement.parentElement.parentElement.parentElement;
    const invoiceInfoClientNameTxt = buttonParentDiv.querySelector(
      ".invoice-info__details .details .details__general .left .name"
    );
    const billFromStreetAddressTxt = buttonParentDiv.querySelector(
      ".invoice-info__details .details .details__general .right .bill-from-street-address-txt"
    );
    const billFromCityTxt = buttonParentDiv.querySelector(
      ".invoice-info__details .details .details__general .right .bill-from-city-txt"
    );
    const billFromPostCardTxt = buttonParentDiv.querySelector(
      ".invoice-info__details .details .details__general .right .bill-from-post-card-txt"
    );
    const billFromCountryTxt = buttonParentDiv.querySelector(
      ".invoice-info__details .details .details__general .right .bill-from-country-txt"
    );
    const invoiceDateTxt = buttonParentDiv.querySelector(
      ".invoice-info__details .details .details__detailed .dates .invoice-date .inv-date"
    );
    const invoiceTermDateTxt = buttonParentDiv.querySelector(
      ".invoice-info__details .details .details__detailed .dates .payment-due .pay-date"
    );
    const billToStreetAddressTxt = buttonParentDiv.querySelector(
      ".invoice-info__details .details .details__detailed .bill-to-details .bill-to-street-address-txt"
    );
    const billToCityTxt = buttonParentDiv.querySelector(
      ".invoice-info__details .details .details__detailed .bill-to-details .bill-to-city-txt"
    );
    const billToPostCardTxt = buttonParentDiv.querySelector(
      ".invoice-info__details .details .details__detailed .bill-to-details .bill-from-post-card-txt"
    );
    const billToCountryTxt = buttonParentDiv.querySelector(
      ".invoice-info__details .details .details__detailed .bill-to-details .bill-to-country-txt"
    );
    const billToEmailTxt = buttonParentDiv.querySelector(
      ".invoice-info__details .details .details__detailed .sent-to-details .bill-to-email-txt"
    );
    const itemNameTxt = buttonParentDiv.querySelector(
      ".invoice-info__details .items .items__list .items__list__item .items__list__name .item-name-txt"
    );
    const itemPriceTxt = buttonParentDiv.querySelector(
      ".invoice-info__details .items .items__list .items__list__item .items__list__item__price .item-price-txt"
    );
    const itemQtyTxt = buttonParentDiv.querySelector(
      ".invoice-info__details .items .items__list .items__list__item .items__list__item__quantity .item-qty-txt"
    );
    const itemTotalTxt = buttonParentDiv.querySelector(
      ".invoice-info__details .items .items__list .items__list__item .items__list__item__total .item-total-txt"
    );
    console.log("######################################");
    console.log(invoiceInfoClientNameTxt);
    console.log(invoiceDateTxt);
    console.log(invoiceTermDateTxt);
    console.log(billToStreetAddressTxt);
    console.log(billToCityTxt);
    console.log(billToPostCardTxt);
    console.log(billToCountryTxt);
    console.log(billFromCityTxt);
    console.log(billFromCountryTxt);
    console.log(billFromPostCardTxt);
    console.log(billFromStreetAddressTxt);
    console.log(billToEmailTxt);
    console.log(itemNameTxt);
    console.log(itemPriceTxt);
    console.log(itemQtyTxt);
    console.log(itemTotalTxt);
    // Show/Hide Edit Section
    this.createInvoiceSection.classList.add("edit-invoice", "show");
    this.createInvoiceSection.classList.remove("create-invoice");
    overlayer.classList.add("show");

    // Take The Original Values To Thier Inputs
    this.editClientEmailInput.value = billToEmailTxt.textContent;
    this.editClientCityInput.value = billToCityTxt.textContent;
    this.editClientCountryInput.value = billToCountryTxt.textContent;
    this.editClientPostCardInput.value = billToPostCardTxt.textContent;
    this.editClientStreetAddressInput.value =
      billToStreetAddressTxt.textContent;
    this.editClientNameInput.value = invoiceInfoClientNameTxt.textContent;
    this.editBillFromCityInput.value = billFromCityTxt.textContent;
    this.editBillFromCountryInput.value = billFromCountryTxt.textContent;
    this.editBillFromPostCardInput.value = billFromPostCardTxt.textContent;
    this.editBillFromStreetAddressInput.value =
      billFromStreetAddressTxt.textContent;
    this.itemNameInput.value = itemNameTxt.textContent;
    this.itemPriceInput.value = itemPriceTxt.textContent;
    this.itemQtyInput.value = itemQtyTxt.textContent;
    this.itemTotalSec.textContent = itemTotalTxt.textContent;
  }
  replaceTheNewValues() {}
}

// Navbar
const navbarButton = document.querySelector(".filter-invoices h2");
const navbarUl = document.querySelector(".filter-invoices__list");
const navbarItems = document.querySelectorAll(".filter-invoices__list__filter");

// Buttons
const createNewInvoiceButton = document.querySelector(
  ".create-invoices__button"
);
const saveInvoiceButton = document.querySelector(
  ".create-invoice .save__button"
);
const removeFilterButton = document.querySelector(
  ".filter-invoices__list__remove-filter"
);
const setStatusButtons = document.querySelectorAll(".make-as__button");
const editInvoiceButtons = document.querySelectorAll(".edit__button");

const createInvoiceSection = document.querySelector(".create-invoice");
const editInvoiceSection = document.querySelector(".edit-invoice");
const overlayer = document.querySelector(".overlayer");

// Create Inputs
// Bill From Inputs
const billFromStreetAddressInput = document.querySelector(
  "#bill-from-street-address"
);
const billFromCityInput = document.querySelector("#bill-from-city");
const billFromPostCardInput = document.querySelector("#bill-from-post-card");
const billFromCountryInput = document.querySelector("#bill-from-country");

// Bill To Inputs
const clientNameInput = document.querySelector("#client-name");
const clientEmailInput = document.querySelector("#client-email");
const clientStreetAddressInput = document.querySelector(
  "#client-street-address"
);
const clientCityInput = document.querySelector("#client-city");
const clientPostCardInput = document.querySelector("#client-post-card");
const clientCountryInput = document.querySelector("#client-country");
const invoiceDateInput = document.querySelector("#invoice-date");
const invoiceTermDateInput = document.querySelector("#invoice-term-date-input");

// Items List Inputs
const itemNameInput = document.querySelector("#item-name");
const qtyInput = document.querySelector("#quantity");
const priceInput = document.querySelector("#price");

const totalPrice = document.querySelector(".inputs .total .total__price");
const mainSection = document.querySelector(".main-section");
const invoicesNumber = document.querySelector(".invoices-length");

const status = new Status(setStatusButtons);
navbarItems.forEach((item) => new SwitchFilter(item));
const navbarList = new NavbarList(navbarButton, navbarUl);
const editInvoice = new EditIvoice(
  editInvoiceButtons,
  editInvoiceSection,
  createInvoiceSection,
  clientEmailInput,
  clientCityInput,
  clientCountryInput,
  clientPostCardInput,
  clientStreetAddressInput,
  clientNameInput,
  billFromCityInput,
  billFromCountryInput,
  billFromPostCardInput,
  billFromStreetAddressInput,
  itemNameInput,
  priceInput,
  qtyInput,
  totalPrice
);
navbarButton.addEventListener("click", () => {
  navbarList.showNavbar();
});

// Function for invoice events (number/info/delete/edit)
function invoiceEvents() {
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
  const allInputs = document.querySelectorAll("input");
  const errorAlert = document.querySelector(".alert");
  let isEmpty = false;
  allInputs.forEach((input) => {
    if (
      input.value.trim() === "" ||
      isNaN(parseInt(billFromPostCardInput.value)) == true ||
      parseInt(priceInput.value) <= 0 ||
      parseInt(qtyInput.value) <= 0
    ) {
      isEmpty = true;
      return;
    }
  });

  if (isEmpty) {
    errorAlert.classList.add("show");
  } else {
    const createInvoiceElement = new CreateInvoiceElement(
      clientNameInput,
      totalPrice,
      invoiceDateInput,
      qtyInput,
      priceInput
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
      invoiceTermDateInput,
      itemNameInput,
      qtyInput,
      priceInput
    );
    createInvoiceElement.makeInvoiceElement();
    invoiceInfo.invoceInfoGenerator();
    createInvoiceSection.classList.remove("show");
    overlayer.classList.remove("show");
    invoiceEvents();
    const setStatusButtons = document.querySelectorAll(".make-as__button");
    const status = new Status(setStatusButtons);
    errorAlert.classList.remove("show");
    const editInvoiceButtons = document.querySelectorAll(".edit__button");
    const editInvoice = new EditIvoice(
      editInvoiceButtons,
      editInvoiceSection,
      createInvoiceSection,
      clientEmailInput,
      clientCityInput,
      clientCountryInput,
      clientPostCardInput,
      clientStreetAddressInput,
      clientNameInput,
      billFromCityInput,
      billFromCountryInput,
      billFromPostCardInput,
      billFromStreetAddressInput,
      itemNameInput,
      priceInput,
      qtyInput,
      totalPrice
    );
  }
});

createNewInvoiceButton.addEventListener("click", () => {
  createInvoiceSection.classList.add("show");
  overlayer.classList.add("show");
});

overlayer.addEventListener("click", () => {
  createInvoiceSection.classList.remove("show");
  createInvoiceSection.classList.add("create-invoice");
  createInvoiceSection.classList.remove("edit-invoice");
  overlayer.classList.remove("show");
});

// Filter Ivoice Items
class FilterInvoices {
  constructor(allFilters, removeFilterButton, filtersList) {
    this.allFilters = allFilters;
    this.removeFilterButton = removeFilterButton;
    this.filtersList = filtersList;
    this.allFilters.forEach((filter) => {
      filter.addEventListener("click", () => {
        this.filterInvoices(filter);
      });
    });
    this.removeFilterButton.addEventListener("click", () => {
      this.removeAllFilters();
    });
  }
  filterInvoices(filter) {
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
  removeAllFilters() {
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
const filterInvoices = new FilterInvoices(
  navbarItems,
  removeFilterButton,
  navbarUl
);

// Light/Dark Mode
const themeToggleButton = document.querySelector(".mode-switch");
const themeImage = document.querySelector(".mode-switch__img");
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
