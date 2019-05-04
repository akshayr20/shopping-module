import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { EditCartItemComponent } from './shopping-cart/edit-cart-item/edit-cart-item.component';
import { CartItemComponent } from './shopping-cart/cart-item/cart-item.component';
import { CartDetailComponent } from './shopping-cart/cart-detail/cart-detail.component';
import { ContactUsComponent } from './shopping-cart/cart-detail/contact-us/contact-us.component';
import { ItemQuickEditComponent } from './shopping-cart/cart-item/item-quick-edit/item-quick-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    EditCartItemComponent,
    CartItemComponent,
    CartDetailComponent,
    ContactUsComponent,
    ItemQuickEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
