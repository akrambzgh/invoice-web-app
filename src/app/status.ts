export class Status {
  setStatusButtons: HTMLElement[];

  constructor(setStatusButtons: HTMLElement[]) {
    this.setStatusButtons = setStatusButtons;
    this.setStatusButtons.forEach((button) => {
      button.addEventListener("click", () => {
        this.setStatus(button);
      });
    });
  }

  setStatus(button: HTMLElement) {
    let invoiceInfoToSetStatus = button.parentElement?.parentElement
      ?.parentElement?.parentElement as HTMLElement;
    const allInvoiceElements = document.querySelectorAll(".invoices__element");
    let infoStatusMarkEle = invoiceInfoToSetStatus.querySelector(".status");
    let infoStatusMarkText = infoStatusMarkEle?.querySelector(".status__text");
    if (infoStatusMarkEle && infoStatusMarkText) {
      infoStatusMarkEle.classList.remove("pending");
      infoStatusMarkEle.classList.add("paid");
      infoStatusMarkText.textContent = "Paid";
    }
    allInvoiceElements.forEach((invoice) => {
      let invoiceElementStatusMark = invoice.querySelector(".status");
      let invoiceElementStatusText =
        invoiceElementStatusMark?.querySelector(".status__text");
      if (
        invoiceElementStatusMark &&
        invoiceElementStatusText &&
        invoice instanceof HTMLElement
      ) {
        if (
          invoiceInfoToSetStatus.dataset.invoiceInfo === invoice.dataset.invoice
        ) {
          invoice.dataset.filter = "paid";
          invoiceElementStatusMark.classList.remove("pending");
          invoiceElementStatusMark.classList.add("paid");
          invoiceElementStatusText.textContent = "Paid";
        }
      }
    });
  }
}
