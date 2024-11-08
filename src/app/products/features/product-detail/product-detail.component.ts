import { Component, effect, inject, input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import ProductDetailStateService from '../../data-access/product-detail-state.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail.component.html',
  providers: [ProductDetailStateService]
})
export default class ProductDetailComponent {
  productDetailState = inject(ProductDetailStateService).state;
  id = input.required<string>();

  constructor(){
    effect(()=> {
      this.productDetailState.getById(this.id());
    })
  }
}
