import "./scss/main.scss";
import sunIcon from "./assets/icon-sun.svg";
import moonIcon from "./assets/icon-moon.svg";

import { CreateInvoiceElement } from "./app/createInvoiceElement";
import { FilterInvoices } from "./app/filterInvoices";
import { InvoiceInfo } from "./app/invoiceInfo";
import { NavbarList } from "./app/navbarList";
import { Status } from "./app/status";
import { SwitchFilter } from "./app/switchFilter";

// Navbar
const navbarButton: HTMLElement | null = document.querySelector(
  ".filter-invoices h2"
);
const navbarUl: HTMLUListElement | null = document.querySelector(
  ".filter-invoices__list"
);
const navbarItems: NodeListOf<HTMLLIElement> = document.querySelectorAll(
  ".filter-invoices__list__filter"
);

// Buttons
const createNewInvoiceButton: HTMLButtonElement | null = document.querySelector(
  ".create-invoices__button"
);
const saveInvoiceButton: HTMLButtonElement | null = document.querySelector(
  ".create-invoice .save__button"
);
const removeFilterButton: HTMLButtonElement | null = document.querySelector(
  ".filter-invoices__list__remove-filter"
);
const setStatusButtons: NodeListOf<HTMLButtonElement> =
  document.querySelectorAll(".make-as__button");
const discardButton: HTMLButtonElement | null =
  document.querySelector(".discard__button");

const createInvoiceSection: HTMLElement | null =
  document.querySelector(".create-invoice");
const overlayer: HTMLElement | null = document.querySelector(".overlayer");

// Create Inputs
// Bill From Inputs
const billFromStreetAddressInput: HTMLInputElement | null =
  document.querySelector("#bill-from-street-address");
const billFromCityInput: HTMLInputElement | null =
  document.querySelector("#bill-from-city");
const billFromPostCardInput: HTMLInputElement | null = document.querySelector(
  "#bill-from-post-card"
);
const billFromCountryInput: HTMLInputElement | null =
  document.querySelector("#bill-from-country");

// Bill To Inputs
const clientNameInput: HTMLInputElement | null =
  document.querySelector("#client-name");
const clientEmailInput: HTMLInputElement | null =
  document.querySelector("#client-email");
const clientStreetAddressInput: HTMLInputElement | null =
  document.querySelector("#client-street-address");
const clientCityInput: HTMLInputElement | null =
  document.querySelector("#client-city");
const clientPostCardInput: HTMLInputElement | null =
  document.querySelector("#client-post-card");
const clientCountryInput: HTMLInputElement | null =
  document.querySelector("#client-country");
const invoiceDateInput: HTMLInputElement | null =
  document.querySelector("#invoice-date");
const invoiceTermDateInput: HTMLInputElement | null = document.querySelector(
  "#invoice-term-date-input"
);

// Items List Inputs
const itemNameInput: HTMLInputElement | null =
  document.querySelector("#item-name");
const qtyInput: HTMLInputElement | null = document.querySelector("#quantity");
const priceInput: HTMLInputElement | null = document.querySelector("#price");

const mainSection: HTMLElement | null = document.querySelector(".main-section");
const invoicesNumber: HTMLElement | null =
  document.querySelector(".invoices-length");

const status: Status = new Status(Array.from(setStatusButtons));
navbarItems.forEach(
  (item: HTMLLIElement) => new SwitchFilter(item, Array.from(navbarItems))
);
const navbarList: NavbarList = new NavbarList(navbarButton, navbarUl);
navbarButton?.addEventListener("click", () => {
  navbarList.showNavbar();
});

// Function for invoice events (number/info/delete/edit)
function invoiceEvents(): void {
  const allInvoiceElements: NodeListOf<HTMLDivElement> =
    document.querySelectorAll(".invoices__element");
  let allInvoiceElementsNumber: number = allInvoiceElements.length;
  if (invoicesNumber) {
    invoicesNumber.textContent = allInvoiceElementsNumber.toString();
  }
  const goBackButtons: NodeListOf<HTMLButtonElement> =
    document.querySelectorAll(".go-back");
  const allInvoiceInfoElements: NodeListOf<HTMLDivElement> =
    document.querySelectorAll(".invoice-info");
  const deleteInvoiceButtons: NodeListOf<HTMLButtonElement> =
    document.querySelectorAll(".delete__button");

  allInvoiceElements.forEach((invoice: HTMLDivElement | null) => {
    invoice?.addEventListener("click", () => {
      allInvoiceInfoElements.forEach((info: HTMLDivElement | null) => {
        if (invoice && invoice.dataset.invoice === info?.dataset.invoiceInfo) {
          info?.classList.add("show");
          if (mainSection) {
            mainSection.style.opacity = "0";
          }
        }
      });
    });
  });
  goBackButtons.forEach((button: HTMLButtonElement | null) => {
    button?.addEventListener("click", () => {
      allInvoiceInfoElements.forEach((info: HTMLDivElement | null) => {
        info?.classList.remove("show");
      });
      if (mainSection) {
        mainSection.style.opacity = "1";
      }
    });
  });
  deleteInvoiceButtons.forEach((button: HTMLButtonElement | null) => {
    button?.addEventListener("click", () => {
      let deletedInvoice: HTMLDivElement | null = button?.parentElement
        ?.parentElement?.parentElement?.parentElement as HTMLDivElement | null;
      allInvoiceElements.forEach((invoice: HTMLDivElement | null) => {
        if (
          deletedInvoice &&
          deletedInvoice.dataset.invoiceInfo === invoice?.dataset.invoice
        ) {
          invoice?.remove();
          deletedInvoice.classList.remove("show");
          if (mainSection) {
            mainSection.style.opacity = "1";
          }
          deletedInvoice.remove();
        }
      });
      if (invoicesNumber) {
        invoicesNumber.textContent = (
          parseInt(invoicesNumber.textContent || "") - 1
        ).toString();
      }
    });
  });
}

invoiceEvents();

saveInvoiceButton?.addEventListener("click", () => {
  const allInputs: NodeListOf<HTMLInputElement> =
    document.querySelectorAll("input");
  const errorAlert: HTMLElement | null = document.querySelector(".alert");
  let isEmpty: boolean = false;
  allInputs.forEach((input: HTMLInputElement) => {
    if (
      input.value.trim() === "" ||
      isNaN(parseInt(billFromPostCardInput?.value || "")) ||
      parseInt(priceInput?.value || "") <= 0 ||
      parseInt(qtyInput?.value || "") <= 0
    ) {
      isEmpty = true;
      console.log(input);
      return;
    }
  });

  if (isEmpty) {
    errorAlert?.classList.add("show");
  } else {
    const createInvoiceElement: CreateInvoiceElement = new CreateInvoiceElement(
      clientNameInput,
      invoiceDateInput,
      qtyInput,
      priceInput
    );
    const invoiceInfo: InvoiceInfo = new InvoiceInfo(
      clientNameInput,
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
    invoiceInfo.invoiceInfoGenerator();
    if (createInvoiceSection) {
      createInvoiceSection.classList.remove("show");
    }
    if (overlayer) {
      overlayer.classList.remove("show");
    }
    invoiceEvents();
    const setStatusButtons: NodeListOf<HTMLButtonElement> =
      document.querySelectorAll(".make-as__button");
    const status: Status = new Status(Array.from(setStatusButtons));
    if (errorAlert) {
      errorAlert.classList.remove("show");
    }
    allInputs.forEach((input) => {
      input.value = "";
    });
  }
});

createNewInvoiceButton?.addEventListener("click", () => {
  if (createInvoiceSection) {
    createInvoiceSection.classList.add("show");
  }
  if (overlayer) {
    overlayer.classList.add("show");
  }
});

overlayer?.addEventListener("click", () => {
  if (createInvoiceSection) {
    createInvoiceSection.classList.remove("show");
    createInvoiceSection.classList.add("create-invoice");
    createInvoiceSection.classList.remove("edit-invoice");
  }
  if (overlayer) {
    overlayer.classList.remove("show");
  }
  const errorAlert: HTMLElement | null = document.querySelector(".alert");
  if (errorAlert) {
    errorAlert.classList.remove("show");
  }
});

discardButton?.addEventListener("click", () => {
  if (createInvoiceSection) {
    createInvoiceSection.classList.remove("show");
    createInvoiceSection.classList.add("create-invoice");
    createInvoiceSection.classList.remove("edit-invoice");
  }
  if (overlayer) {
    overlayer.classList.remove("show");
  }
  const errorAlert: HTMLElement | null = document.querySelector(".alert");
  if (errorAlert) {
    errorAlert.classList.remove("show");
  }
});

const filterInvoices: FilterInvoices = new FilterInvoices(
  navbarItems,
  removeFilterButton,
  navbarUl
);

// Light/Dark Mode
const themeToggleButton: HTMLButtonElement | null =
  document.querySelector(".mode-switch");
const themeImage: HTMLImageElement | null =
  document.querySelector(".mode-switch__img");
const bodyElement: HTMLElement | null = document.body;

themeToggleButton?.addEventListener("click", () => {
  if (bodyElement) {
    bodyElement.classList.toggle("dark-mode");
  }
  if (themeImage) {
    themeImage.style.transform += "rotate(360deg)";
    if (bodyElement?.classList.contains("dark-mode")) {
      themeImage.src = sunIcon;
    } else {
      themeImage.src = moonIcon;
    }
  }
});
