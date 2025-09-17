import { NgModule, provideBrowserGlobalErrorListeners, LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Header } from './components/header/header';
import { Product } from './components/product/product';
import { Products } from './components/products/products';
import { Footer } from './components/footer/footer';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt, 'pt')

@NgModule({
  declarations: [
    App,
    Header,
    Product,
    Products,
    Footer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'},
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
