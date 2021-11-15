import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './page/home.component';
import { HeaderComponent } from './components/header/header.component';
import { InvoiceItemComponent } from './components/invoice-item/invoice-item.component';
import { InvoiceFormComponent } from './components/invoice-form/invoice-form.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    InvoiceItemComponent,
    InvoiceFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
