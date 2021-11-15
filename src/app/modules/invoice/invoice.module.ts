import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceComponent } from './page/invoice.component';
import { HeaderComponent } from './components/header/header.component';
import { InvoiceDetailsComponent } from './components/invoice-details/invoice-details.component';



@NgModule({
  declarations: [
    InvoiceComponent,
    HeaderComponent,
    InvoiceDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InvoiceModule { }
