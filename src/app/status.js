export default class Status {
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
