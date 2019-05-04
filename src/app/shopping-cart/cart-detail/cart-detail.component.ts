import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss']
})
export class CartDetailComponent {
  cartTotal$: Observable<any>;
  constructor(private cartService: CartService) {
    this.cartTotal$ = this.cartService.cartTotal$;
  }
}
