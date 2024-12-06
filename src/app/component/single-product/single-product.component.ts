import { Component, input, InputSignal } from '@angular/core';
import { SingleProduct } from '../../../interfaces/single-product';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-single-product',
  imports: [NgIf, RouterLink],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent {
  product: InputSignal<SingleProduct> = input.required()

  constructor(){
    
  }
}