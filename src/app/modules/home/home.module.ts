import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './page/home.component';

import { HeaderComponent } from './components/header/header.component';
import { InvoiceListComponent } from './components/invoice-list/invoice-list.component';
import { InvoiceItemComponent } from './components/invoice-list/invoice-item/invoice-item.component';

import { HomeRoutingModule } from './home-routing.module';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    InvoiceItemComponent,
    InvoiceListComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, IconSpriteModule],
})
export class HomeModule {}
