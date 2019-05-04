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
  cartItem$: Observable<any>;
  quantity;
  constructor(private cartService: CartService) {
    this.cartItem$ = this.cartService.cartItem$;
    this.cartItem$.subscribe(item => {
      this.quantity = item.p_quantity;
    });
  }

  updateItemQuantity(id) {
    this.cartService.updateQuantity(id, this.quantity);
    this.closePopUp$.next(true);
  }
}
