import { Component, Input, OnInit } from '@angular/core';
import { Invoice } from 'src/app/data/schema/invoice';

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.scss']
})
export class InvoiceDetailsComponent implements OnInit {
  @Input() invoice!: Invoice;
  
  constructor() { }

  ngOnInit(): void {
  }

}
