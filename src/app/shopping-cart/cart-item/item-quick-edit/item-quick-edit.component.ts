import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-item-quick-edit',
  templateUrl: './item-quick-edit.component.html',
  styleUrls: ['./item-quick-edit.component.scss']
})
export class ItemQuickEditComponent {
  @Output() editItem$: EventEmitter<boolean> = new EventEmitter();
  @Input() cartItem;

  constructor(private cartService: CartService) {}

  removeItemFromCart() {
    this.cartService.removeItemFromCart(this.cartItem.p_id);
  }
}
