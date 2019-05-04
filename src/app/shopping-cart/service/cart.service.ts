import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const data = {
  productsInCart: [
    {
      p_id: '1',
      p_name: 'cotton tshirt',
      p_variation: 'solid green',
      p_style: 'ms13kt1906',
      p_selected_color: {
        name: 'blue',
        hexcode: '#1169BD'
      },
      p_selected_size: {
        name: 'small',
        code: 's'
      },
      p_available_options: {
        colors: [
          {
            name: 'green',
            hexcode: '#A3D2A1'
          },
          {
            name: 'yellow',
            hexcode: '#F9F8E6'
          },
          {
            name: 'red',
            hexcode: '#ED99A8'
          }
        ],
        sizes: [
          {
            name: 'small',
            code: 's'
          },
          {
            name: 'medium',
            code: 'm'
          },
          {
            name: 'large',
            code: 'l'
          },
          {
            name: 'extra large',
            code: 'xl'
          }
        ]
      },
      p_quantity: 1,
      p_originalprice: 11.0,
      p_price: 11.0,
      c_currency: '$'
    },
    {
      p_id: '2',
      p_name: 'print girls tee',
      p_variation: 'pink rainbow',
      p_style: 'ms13kt1906',
      p_selected_color: {
        name: 'pink',
        hexcode: '#F1DDEF'
      },
      p_selected_size: {
        name: 'small',
        code: 's'
      },
      p_available_options: {
        colors: [
          {
            name: 'green',
            hexcode: '#A3D2A1'
          },
          {
            name: 'yellow',
            hexcode: '#F9F8E6'
          },
          {
            name: 'pink',
            hexcode: '#F1DDEF'
          }
        ],
        sizes: [
          {
            name: 'small',
            code: 's'
          },
          {
            name: 'medium',
            code: 'm'
          },
          {
            name: 'large',
            code: 'l'
          },
          {
            name: 'extra large',
            code: 'xl'
          }
        ]
      },
      p_quantity: 1,
      p_originalprice: 17.0,
      p_price: 17.0,
      c_currency: '$'
    },
    {
      p_id: '3',
      p_name: 'flower pattern shirt',
      p_variation: 'blue',
      p_style: 'ms13kt1906',
      p_selected_color: {
        name: 'blue',
        hexcode: '#1169BD'
      },
      p_selected_size: {
        name: 'small',
        code: 's'
      },
      p_available_options: {
        colors: [
          {
            name: 'green',
            hexcode: '#A3D2A1'
          },
          {
            name: 'blue',
            hexcode: '#1169BD'
          },
          {
            name: 'red',
            hexcode: '#ED99A8'
          }
        ],
        sizes: [
          {
            name: 'small',
            code: 's'
          },
          {
            name: 'medium',
            code: 'm'
          },
          {
            name: 'large',
            code: 'l'
          },
          {
            name: 'extra large',
            code: 'xl'
          }
        ]
      },
      p_quantity: 3,
      p_originalprice: 21.0,
      p_price: 9.0,
      c_currency: '$'
    },
    {
      p_id: '4',
      p_name: 'check pattern tshirt',
      p_variation: 'mens red',
      p_style: 'ms13kt1906',
      p_selected_color: {
        name: 'red',
        hexcode: ''
      },
      p_selected_size: {
        name: 'small',
        code: 's'
      },
      p_available_options: {
        colors: [
          {
            name: 'green',
            hexcode: '#A3D2A1'
          },
          {
            name: 'yellow',
            hexcode: '#F9F8E6'
          },
          {
            name: 'red',
            hexcode: '#ED99A8'
          }
        ],
        sizes: [
          {
            name: 'small',
            code: 's'
          },
          {
            name: 'medium',
            code: 'm'
          },
          {
            name: 'large',
            code: 'l'
          },
          {
            name: 'extra large',
            code: 'xl'
          }
        ]
      },
      p_quantity: 1,
      p_originalprice: 22.0,
      p_price: 22.0,
      c_currency: '$'
    }
  ]
};

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems$ = new BehaviorSubject([]);
  cartItem$ = new BehaviorSubject({});

  constructor() {}

  getCartItems() {
    console.log(data);
    this.cartItems$.next(data.productsInCart);
  }

  getItemById(id) {
    const index = data.productsInCart.findIndex(item => item.p_id === id);
    this.cartItem$.next(data.productsInCart[index]);
  }

  removeItemFromCart(id) {
    const index = data.productsInCart.findIndex(item => item.p_id === id);
    data.productsInCart.splice(index, 1);
    this.cartItems$.next(data.productsInCart);
  }

  updateQuantity(id, qty) {
    const index = data.productsInCart.findIndex(item => item.p_id === id);
    data.productsInCart[index].p_quantity = qty;
    this.cartItems$.next(data.productsInCart);
  }
}