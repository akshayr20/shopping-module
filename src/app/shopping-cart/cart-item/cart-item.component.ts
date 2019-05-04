import { Component, OnInit, Input } from '@angular/core';
import { CartItems } from '../models/cartItems';
import { Observable } from 'rxjs';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() cartItems$: Observable<Array<CartItems>>;
  isEditPopUpVisible = false;

  constructor(private cartService: CartService) {}

  ngOnInit() {}

  editItem(item) {
    this.isEditPopUpVisible = true;
    this.cartService.getItemById(item.p_id);
  }
}
