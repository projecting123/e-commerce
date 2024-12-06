import { Component, inject, signal } from '@angular/core';
import { Productservice } from '../../services/product.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  ps = inject(Productservice)
  router = inject(Router)
  p_name = signal('')
  p_description = signal('')
  p_price = signal<number>(0)
  p_availablility = signal<boolean | null>(false)
  addProduct() {
    this.ps.products().productList.push({
      id: this.ps.products().productList.length + 1,
      name: this.p_name(),
      description: this.p_description(),
      price: this.p_price(),
      isAvailable: true,
      imageUrl: ''
    })
    this.router.navigate(['/'])
  }
}
