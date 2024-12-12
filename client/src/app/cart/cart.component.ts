import { Component, inject } from '@angular/core';
import { CartItemComponent } from "./ui/cart-item/cart-item.component";
import { CartStateService } from '../shared/data-access/cart-state.service';
import { ProductItemCart } from '../shared/interfaces/product.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartItemComponent, CurrencyPipe],
  templateUrl: './cart.component.html',
  styles: ``
})
export default class CartComponent {
  state = inject(CartStateService).state;

  onRemove(_id: string) {
    this.state.remove(_id)
  }

  onIncrease(product: ProductItemCart) {
    this.state.update({
      ...product,
      quantity: product.quantity + 1
    })
  }

  onDecrease(product: ProductItemCart) {
    this.state.update({
      ...product,
      quantity: product.quantity - 1
    })
    if (product.quantity <= 0) {
      this.state.update({
        ...product,
        quantity: 0
      })
    }
  }
}
