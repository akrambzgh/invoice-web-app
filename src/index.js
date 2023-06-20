import "./scss/main.scss";
import sunIcon from "./assets/icon-sun.svg";
import moonIcon from "./assets/icon-moon.svg";

import CreateInvoiceElement from "./app/createInvoiceElement";
import FilterInvoices from "./app/filterInvoices";
import InvoiceInof from "./app/invoiceInfo";
import NavbarList from "./app/navbarList";
import Status from "./app/status";
import SwitchFilter from "./app/switchFilter";
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
const discardButton = document.querySelector(".discard__button");

const createInvoiceSection = document.querySelector(".create-invoice");
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
navbarItems.forEach((item) => new SwitchFilter(item, navbarItems));
const navbarList = new NavbarList(navbarButton, navbarUl);
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
      console.log(input);
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
  errorAlert.classList.remove("show");
});
discardButton.addEventListener("click", () => {
  createInvoiceSection.classList.remove("show");
  createInvoiceSection.classList.add("create-invoice");
  createInvoiceSection.classList.remove("edit-invoice");
  overlayer.classList.remove("show");
  errorAlert.classList.remove("show");
});
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
