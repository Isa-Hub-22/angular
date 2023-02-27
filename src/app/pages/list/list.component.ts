
import { products } from 'src/app/core/services/products/product_data';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { ApiProductService } from './../../core/services/products/api/api-product.service';
import { ApiProduct } from 'src/app/core/services/products/api/api-product_model';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/services/products/product.model';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  
  public products: Product[] = [];

  public pages = [0, 1]
  public active = 0

  contador = 0
  addItem() {
    this.contador = this.contador + 1
  }

  constructor( private productsService: ProductsService) {}

  public ngOnInit(): void {
   this.productsService.getProducts().subscribe((productsFromApi) => { this.products = productsFromApi;
    })
  }

  public removeProductFromList (id?: string){
    if(!id) { return;}
      this.productsService.deleteProduct(id).pipe(
        switchMap ((product) => {
        return this.productsService.getProducts();
      })
      ).subscribe ((productsFromApi) => {
        this.products = productsFromApi;
      } );
  }

  get currentPage (){
    return this.active;
  }

}
