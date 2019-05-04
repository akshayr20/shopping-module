import { Component, OnInit } from '@angular/core';
import { CartItems } from './models/cartItems';
import { CartService } from './service/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  cartItems$: Observable<Array<CartItems>>;

  constructor(private cartService: CartService) {
    this.cartItems$ = this.cartService.cartItems$;
  }

  ngOnInit() {
    this.cartService.getCartItems();
    this.cartService.getTotal();
  }
}
