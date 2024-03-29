export class FilterInvoices {
  allFilters: NodeListOf<HTMLElement>;
  removeFilterButton: HTMLElement | null;
  filtersList: HTMLElement | null;

  constructor(
    allFilters: NodeListOf<HTMLElement>,
    removeFilterButton: HTMLElement | null,
    filtersList: HTMLElement | null
  ) {
    this.allFilters = allFilters;
    this.removeFilterButton = removeFilterButton;
    this.filtersList = filtersList;

    this.allFilters.forEach((filter) => {
      filter.addEventListener("click", () => {
        this.filterInvoices(filter);
      });
    });

    this.removeFilterButton?.addEventListener("click", () => {
      this.removeAllFilters();
    });
  }

  filterInvoices(filter: HTMLElement): void {
    const allInvoiceElements = document.querySelectorAll(
      ".invoices__element"
    ) as NodeListOf<HTMLElement>;

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
    const allInvoiceElements = document.querySelectorAll(
      ".invoices__element"
    ) as NodeListOf<HTMLElement>;

    allInvoiceElements.forEach((invoice) => {
      invoice.style.display = "flex";
    });

    this.allFilters.forEach((filter) => {
      filter.classList.remove("fil-selected");
    });

    this.filtersList?.classList.remove("show");
  }
}
