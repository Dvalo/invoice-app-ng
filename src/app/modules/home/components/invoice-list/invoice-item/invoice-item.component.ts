import { Component, Input, OnInit } from '@angular/core';
import { Invoice } from 'src/app/data/schema/invoice';

@Component({
  selector: 'app-invoice-item',
  templateUrl: './invoice-item.component.html',
  styleUrls: ['./invoice-item.component.scss'],
})
export class InvoiceItemComponent implements OnInit {
  @Input() invoice!: Invoice;

  constructor() {}

  ngOnInit(): void {}
}
