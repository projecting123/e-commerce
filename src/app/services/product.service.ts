import { Injectable, signal, WritableSignal } from '@angular/core';
import { Products } from '../../interfaces/single-product';

@Injectable({
  providedIn: 'root'
})
export class Productservice {
  products: WritableSignal<Products> = signal({
    category: 'smartphone',
    productList: [
      {
        id: 1,
        name: 'Redmi 12',
        price: 15200,
        description: 'A powerful smartphone from Xiaomi',
        imageUrl: '../../../smartphones/redmi12.webp',
        isAvailable: true
      },
      {
        id: 2,
        name: 'Vivo Y200',
        price: 17899,
        description: 'Stylish phone from Vivo',
        imageUrl: '../../../smartphones/vivoy200.webp',
        isAvailable: true
      },
      {
        id: 3,
        name: 'Realme 12 Pro',
        price: 21200,
        description: 'Realme best smartphone with best feature',
        imageUrl: '../../../smartphones/realme12pro.webp',
        isAvailable: false
      },
      {
        id: 4,
        name: 'Poco C65',
        price: 7500,
        description: 'Best budget smartphone',
        imageUrl: '../../../smartphones/pococ65.jpg',
        isAvailable: true
      },
      {
        id: 5,
        name: 'Iqoo neo 9 Pro',
        price: 38500,
        description: 'Super extreme performance device by IQOO',
        imageUrl: '../../../smartphones/neo9pro.jpg',
        isAvailable: false
      },
      {
        id: 6,
        name: 'Iqoo 12',
        price: 55000,
        description: 'All in one smartphone by IQOO',
        imageUrl: '../../../smartphones/iqoo12.jpg',
        isAvailable: false
      },
      {
        id: 7,
        name: 'Vivo X100',
        price: 80000,
        description: 'Super performance and camera deliverable phone',
        imageUrl: '../../../smartphones/vivox100.jpg',
        isAvailable: true
      },
      {
        id: 8,
        name: 'Motorola G85',
        price: 17999,
        description: 'A mid budget 5G smartphone by Motorola',
        imageUrl: '../../../smartphones/g85.jpg',
        isAvailable: true
      },
      {
        id: 9,
        name: 'Oppo K12X',
        price: 12999,
        description: '360 degree damage proof 5G smartphone by OPPO',
        imageUrl: '../../../smartphones/k12x.webp',
        isAvailable: false
      },
      {
        id: 10,
        name: 'Samsung Galaxy F15',
        price: 14999,
        description: 'Pure performance and screen with Galaxy F15 by Samsung',
        imageUrl: '../../../smartphones/f15.webp',
        isAvailable: true
      }
    ]
  })
  constructor() { }
}
