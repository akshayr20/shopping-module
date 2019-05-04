import { Component, OnInit } from '@angular/core';
import { CartItems } from './models/cartItems';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  cartItems: Array<CartItems> = [
    { img: '../../assets/images/P1.jpg', description: 'Solid Green Cotton T-Shirt', size: 'M', qty: 1, price: 40 },
    { img: '../../assets/images/T2.jpg', description: 'Pink Rainbow Print Girls Tee', size: 'L', qty: 1, price: 40 },
    { img: '../../assets/images/T4.jpg', description: 'Blue Flower pattern shirt', size: 'M', qty: 1, price: 40 }
  ];

  constructor() {}

  ngOnInit() {}
}
