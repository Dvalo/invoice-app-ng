import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';

@NgModule({
  declarations: [AppComponent, SidebarComponent, ContentLayoutComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, IconSpriteModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
