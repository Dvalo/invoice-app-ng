import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { InvoiceService } from 'src/app/data/service/invoice.service';
import { Invoice } from 'src/app/data/schema/invoice';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() invoice!: Invoice;

  constructor(
    private invoiceService: InvoiceService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  updateStatus(): void {
    this.invoice.status = 'paid';
    this.invoiceService
      .updateInvoice(this.invoice._id, this.invoice)
      .subscribe({
        next: () => {
          this.successfulUpdate();
        },
        error: () => {
          this.unsuccessfulUpdate();
          this.invoice.status = 'pending';
        },
      });
  }

  successfulUpdate() {
    this.toastr.success('', 'Invoice marked as paid!', {
      progressBar: true,
      timeOut: 2000,
    });
  }

  unsuccessfulUpdate() {
    this.toastr.error('', 'Unable to mark invoice as paid!', {
      progressBar: true,
      timeOut: 2500,
    });
  }
}
