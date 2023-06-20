import rightArrowIcon from "../assets/icon-arrow-right.svg";

export class CreateInvoiceElement {
  clientNameInput: HTMLInputElement;
  totalPrice: HTMLInputElement;
  invoiceDateInput: HTMLInputElement;
  qtyInput: HTMLInputElement;
  itemPriceInput: HTMLInputElement;

  constructor(
    clientNameInput: HTMLInputElement,
    totalPrice: HTMLInputElement,
    invoiceDateInput: HTMLInputElement,
    qtyInput: HTMLInputElement,
    priceInput: HTMLInputElement
  ) {
    this.clientNameInput = clientNameInput;
    this.totalPrice = totalPrice;
    this.invoiceDateInput = invoiceDateInput;
    this.qtyInput = qtyInput;
    this.itemPriceInput = priceInput;
  }

  static generateRandomCode(): string {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters.charAt(randomIndex);
    }
    return code;
  }

  makeInvoiceElement(): void {
    let code = CreateInvoiceElement.generateRandomCode();
    const invoicesContainer = document.querySelector(
      ".invoices"
    ) as HTMLElement;
    const allInvoiceElements = document.querySelectorAll(
      ".invoices__element"
    ) as NodeListOf<HTMLElement>;
    let num = allInvoiceElements.length + 1;
    let invoiceElementMarkup = `
      <div class="invoices__element" data-invoice="num${num}" data-filter="pending">
        <h3 class="invoices__element__id">
          <span class="hash">#</span>${code}
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
