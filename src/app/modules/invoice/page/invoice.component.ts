import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { InvoiceService } from 'src/app/data/service/invoice.service';
import { Invoice } from 'src/app/data/schema/invoice';
@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss'],
})
export class InvoiceComponent implements OnInit {
  invoice!: Invoice;

  constructor(
    private invoiceService: InvoiceService,
    private router: ActivatedRoute,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.invoiceService
      .getInvoice(this.router.snapshot.paramMap.get('id')!)
      .subscribe((data) => {
        this.invoice = data;
        this.titleService.setTitle(`Invoice ${this.invoice._id} | Invoice App`);
      });
  }
}
