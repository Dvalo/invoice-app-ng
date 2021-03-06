import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { InvoiceFormComponent } from './shared/components/invoice-form/invoice-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContentLayoutComponent,
    InvoiceFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    IconSpriteModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
