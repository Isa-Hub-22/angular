import { Component } from '@angular/core';
import { products } from 'src/app/core/services/products/product_data';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { ApiProductService } from './../../core/services/products/api/api-product.service';
import { Product } from 'src/app/core/services/products/product.model';

@Component({
  selector: 'app-product-my-list',
  templateUrl: './product-my-list.component.html',
  styleUrls: ['./product-my-list.component.scss']
})
export class ProductMyListComponent {

  constructor( private productsService: ProductsService) {}
  public products: Product[] = [];

  public ngOnInit(): void {
    this.productsService.getProducts().subscribe((productsFromApi) => { 
      this.products = productsFromApi.filter(product => {
        return product.name.toLowerCase() === 'isabel'
      });
     })
   }

  addItem() {
    console.log('Add Item')
  }
}