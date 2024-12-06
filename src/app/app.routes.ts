import { Routes } from '@angular/router';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { AddProductComponent } from './component/add-product/add-product.component';

export const routes: Routes = [
    {path: '', component: ProductListComponent, title: 'E-Commerce Website | Concept Research'},
    {path: 'product/:id', component: ProductDetailComponent, title: 'Product Detail Page | Concept Research'},
    {path: 'add-product', component: AddProductComponent, title: 'Add Product | Concept Research'},
    {path: '**', component: PageNotFoundComponent, title: 'Page Not Found'},
];
