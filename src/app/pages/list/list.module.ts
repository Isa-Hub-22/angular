import { NewProductModule } from './../new-product/new-product.module';
import { ProductMyListModule } from './../product-my-list/product-my-list.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { DetailComponent } from './detail/detail.component';
import { AppPipesModule } from '../../app-pipes.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,

  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    AppPipesModule,
    FormsModule,
    RouterModule,
    NewProductModule
    
    
  ],
  exports: [
    ListComponent,
    DetailComponent,
  ]
})
export class ListModule { }
