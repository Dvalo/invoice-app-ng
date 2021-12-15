import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  deleteInvoice(): void {
    this.invoiceService.deleteInvoice(this.invoice._id).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: () => {
        this.errorToastr(
          'Please try again later.',
          'Unable to delete this invoice!'
        );
      },
    });
  }

  updateStatus(): void {
    this.invoice.status = 'paid';
    this.invoiceService
      .updateInvoice(this.invoice._id, this.invoice)
      .subscribe({
        next: () => {
          this.successToastr('', 'Invoice marked as paid!');
        },
        error: () => {
          this.errorToastr('', 'Unable to mark invoice as paid!');
          this.invoice.status = 'pending';
        },
      });
  }

  successToastr(message: string, title: string) {
    this.toastr.success(message, title, {
      progressBar: true,
      timeOut: 2000,
    });
  }

  errorToastr(message: string, title: string) {
    this.toastr.error(message, title, {
      progressBar: true,
      timeOut: 2500,
    });
  }
}
