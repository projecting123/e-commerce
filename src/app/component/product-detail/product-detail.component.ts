import { Component, inject, input, signal, WritableSignal } from '@angular/core';
import { Productservice } from '../../services/product.service';
import { SingleProduct } from '../../../interfaces/single-product';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  ps = inject(Productservice)
  document = inject(DOCUMENT)
  id = input('id')
  productInfo: WritableSignal<SingleProduct> = signal<any>(null)
  ngOnInit() {
    this.ps.products().productList.forEach(product => {
      if (product.id == +this.id()) {
        this.document.title = product.name + ' | Concept Research'
        this.productInfo.set(product)
      }
    })
  }
}
