import { ProductDetailModule } from './../product-detail/product-detail.module';
import { ProductMyListComponent } from './product-my-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductMyListRoutingModule } from './product-my-list-routing.module';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    ProductMyListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    ProductMyListRoutingModule,
    ProductDetailModule
  ],
  exports: [
    ProductMyListComponent,
    DetailComponent
  ]
})
export class ProductMyListModule { }
