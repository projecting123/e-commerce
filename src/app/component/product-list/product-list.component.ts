import { Component, computed, inject, Signal, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SingleProductComponent } from '../single-product/single-product.component';
import { Productservice } from '../../services/product.service';
import { SingleProduct } from '../../../interfaces/single-product';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [SingleProductComponent, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  ps = inject(Productservice)
  router = inject(Router)
  searchValue: WritableSignal<string> = signal('')
  filteredproducts: Signal<SingleProduct[]> = computed(() => {
    if(this.searchValue().length > 0){
      return this.ps.products().productList.filter(p => p.name.toUpperCase().startsWith(this.searchValue().toUpperCase()))
    }
    return this.ps.products().productList
  })
}
