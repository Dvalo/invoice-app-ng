import { Component, Input, OnInit } from '@angular/core';
import { Invoice } from 'src/app/data/schema/invoice';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss'],
})
export class InvoiceListComponent implements OnInit {
  @Input() invoices: Invoice[] = [];
  constructor() {}

  ngOnInit(): void {}
}
