import leftArrowIcon from "../assets/icon-arrow-left.svg";
import { CreateInvoiceElement } from "./createInvoiceElement";

export class InvoiceInfo extends CreateInvoiceElement {
  billFromStreetAddressInput: HTMLInputElement | null;
  billFromCityInput: HTMLInputElement | null;
  billFromPostCardInput: HTMLInputElement | null;
  billFromCountryInput: HTMLInputElement | null;
  clientEmailInput: HTMLInputElement | null;
  clientStreetAddressInput: HTMLInputElement | null;
  clientCityInput: HTMLInputElement | null;
  clientPostCardInput: HTMLInputElement | null;
  clientCountryInput: HTMLInputElement | null;
  invoiceDateInput: HTMLInputElement | null;
  invoiceTermDateInput: HTMLInputElement | null;
  itemNameInput: HTMLInputElement | null;
  qtyInput: HTMLInputElement | null;
  priceInput: HTMLInputElement | null;

  constructor(
    clientNameInput: HTMLInputElement | null,
    billFromStreetAddressInput: HTMLInputElement | null,
    billFromCityInput: HTMLInputElement | null,
    billFromPostCardInput: HTMLInputElement | null,
    billFromCountryInput: HTMLInputElement | null,
    clientEmailInput: HTMLInputElement | null,
    clientStreetAddressInput: HTMLInputElement | null,
    clientCityInput: HTMLInputElement | null,
    clientPostCardInput: HTMLInputElement | null,
    clientCountryInput: HTMLInputElement | null,
    invoiceDateInput: HTMLInputElement | null,
    invoiceTermDateInput: HTMLInputElement | null,
    itemNameInput: HTMLInputElement | null,
    qtyInput: HTMLInputElement | null,
    priceInput: HTMLInputElement | null
  ) {
    super(clientNameInput, invoiceDateInput, qtyInput, priceInput);
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

  invoiceInfoGenerator(): void {
    const allInvoiceElements = document.querySelectorAll(".invoices__element");
    let num = allInvoiceElements.length;
    const infoContainer = document.querySelector(
      ".invoice-info-container"
    ) as HTMLElement;
    let invoiceInfoMarkup = `
      <div class="invoice-info" data-invoice-info="num${num}">
        <div class="go-back">
          <span>
            <img src="${leftArrowIcon}" alt="" /> go back
          </span>
        </div>
        <div class="invoice-info__header">
          <div class="left">
            <span>status</span>
            <div class="status pending">
              <div class="status__circle"></div>
              <h3 class="status__text">Pending</h3>
            </div>
          </div>
          <div class="right">
            <div class="edit">
              <button class="edit__button button">edit</button>
            </div>
            <div class="delete">
              <button class="delete__button button">delete</button>
            </div>
            <div class="make-as">
              <button class="make-as__button button">Make As Paid</button>
            </div>
          </div>
        </div>
        <div class="invoice-info__details">
          <div class="details">
            <div class="details__general">
              <div class="left">
                <span class="name">${this.clientNameInput?.value}</span>
              </div>
              <div class="right">
                <span class="bill-from-street-address-txt">${
                  this.billFromStreetAddressInput?.value
                }</span>
                <span class="bill-from-city-txt">${
                  this.billFromCityInput?.value
                }</span>
                <span class="bill-from-post-card-txt">${
                  this.billFromPostCardInput?.value
                }</span>
                <span class="bill-from-country-txt">${
                  this.billFromCountryInput?.value
                }</span>
              </div>
            </div>
            <div class="details__detailed">
              <div class="dates">
                <div class="invoice-date">
                  <span>invoice date</span>
                  <h1 class="date-text inv-date">${
                    this.invoiceDateInput?.value
                  }</h1>
                </div>
                <div class="payment-due">
                  <span>payment Due</span>
                  <h1 class="date-text pay-date">${
                    this.invoiceTermDateInput?.value
                  }</h1>
                </div>
              </div>
              <div class="bill-to-details">
                <div class="bill-to-details">
                  <span class="bill-to-street-address-txt">${
                    this.clientStreetAddressInput?.value
                  }</span>
                  <span class="bill-to-city-txt">${
                    this.clientCityInput?.value
                  }</span>
                  <span class="bill-from-post-card-txt">${
                    this.clientPostCardInput?.value
                  }</span>
                  <span class="bill-to-country-txt">${
                    this.clientCountryInput?.value
                  }</span>
                </div>
              </div>
              <div class="sent-to-details">
                <span>sent to</span>
                <h3 class="bill-to-email-txt">${
                  this.clientEmailInput?.value
                }</h3>
              </div>
            </div>
          </div>
          <div class="items">
            <div class="items__list">
              <div class="items__list__item">
                <div class="items__list__name">
                  <span class="item-name-title">item name</span>
                  <h3 class="item-name-txt">${this.itemNameInput?.value}</h3>
                </div>
                <div class="items__list__item__quantity">
                  <span class="item-qty-title">qty</span>
                  <h3 class="item-qty-txt">${this.qtyInput?.value}</h3>
                </div>
                <div class="items__list__item__price">
                  <span class="item-price-title">item price</span>
                  <h3 class="item-price-txt">£${this.priceInput?.value}</h3>
                </div>
                <div class="items__list__item__total">
                  <span class="item-total-title">total</span>
                  <h3 class="item-total-txt">£${
                    parseInt(this.qtyInput?.value ?? ``) *
                    parseInt(this.priceInput?.value ?? ``)
                  }</h3>
                </div>
              </div>
            </div>
            <div class="items__total-price">
              <h1>amount due</h1>
              <h1>£${
                parseInt(this.qtyInput?.value ?? ``) *
                parseInt(this.priceInput?.value ?? ``)
              }</h1>
            </div>
          </div>
        </div>
      </div>
    `;

    infoContainer.innerHTML += invoiceInfoMarkup;
  }
}
