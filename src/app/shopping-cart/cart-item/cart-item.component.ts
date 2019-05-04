import { Component, OnInit, Input } from '@angular/core';
import { CartItems } from '../models/cartItems';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() cartItems: CartItems;
  isEditPopUpVisible = false;

  constructor() {}

  ngOnInit() {}
}
