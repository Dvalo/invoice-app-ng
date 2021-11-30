import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { InvoiceService } from 'src/app/data/service/invoice.service';
import { Invoice } from 'src/app/data/schema/invoice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  invoices: Invoice[] = [];

  constructor(
    private invoiceService: InvoiceService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.invoiceService.getInvoices().subscribe((data) => {
      this.invoices = data;
    });
    this.titleService.setTitle('Invoice App');
  }
}
