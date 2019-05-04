import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-edit-cart-item',
  templateUrl: './edit-cart-item.component.html',
  styleUrls: ['./edit-cart-item.component.scss']
})
export class EditCartItemComponent {
  @Output() closePopUp$ = new EventEmitter<Boolean>();
  quantity;
  cartItem$: Observable<any>;
  constructor(private cartService: CartService) {
    this.cartItem$ = this.cartService.cartItem$;
  }

  updateItemQuantity(id) {
    this.cartService.updateQuantity(id, this.quantity);
    this.closePopUp$.next(true);
  }
}
