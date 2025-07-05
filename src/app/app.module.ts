import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';


import { FormsModule } from '@angular/forms';
import { BeautyAboutComponent } from './beauty-about/beauty-about.component';
import { BeautyProductComponent } from './beauty-product/beauty-product.component';
import { CartComponent } from './cart/cart.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    BeautyAboutComponent,
    BeautyProductComponent,
    CartComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
