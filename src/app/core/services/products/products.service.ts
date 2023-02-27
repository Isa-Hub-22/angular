import { ApiAuthor } from './api/api-product_model';
import { Author } from 'src/app/core/services/products/product.model';
import { Product } from 'src/app/core/services/products/product.model';

import { ApiProductService } from './api/api-product.service';
import { ApiProduct } from 'src/app/core/services/products/api/api-product_model';
import { Injectable } from '@angular/core';
import { transformProduct } from './product.helpers';
import { transformAuthor } from './author.helpers';
import { catchError, filter, forkJoin, map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private apiProductService: ApiProductService
    ) { }

  public getProducts(): Observable<Product[]>{
    return this.apiProductService.getApiProducts().pipe(
      map((products: ApiProduct[]) => {
        return products.map((product) => transformProduct(product))
      }),
  
    );
  }
  public getProductDetail(id: string): Observable<Product>{
    return this.apiProductService.getApiProductDetail(id).pipe(map(product => transformProduct(product))
    );
  }

  public deleteProduct(id: string): Observable<Product> {
    return this.apiProductService.deleteApiProduct(id).pipe(
      map((product) => transformProduct(product))
    )
  }

  public createProduct(body: Product): Observable<Product> {
    return this.apiProductService.createApiProducts(body).pipe(
      map((product) => transformProduct(product))
    );
  } 

  public editProduct(id: string, body: Product): Observable<Product> {
    return this.apiProductService.editApiProducts(id, body).pipe(
      map((product) => transformProduct(product))
    );
  } 


  public getAuthor(): Observable<Author[]>{
    return this.apiProductService.getApiAuthor().pipe(
      map((authors: ApiAuthor[]) => {
        return authors.map((author) => transformAuthor(author))
      }),
  
    );
  }
  public getAuthorDetail(id: string): Observable<Product>{
    return this.apiProductService.getApiProductDetail(id).pipe(map(author => transformProduct(author))
    );
  }
  
  public prueba(id: string) {
    return forkJoin([
      this.apiProductService.getApiProductDetail(id),
      this.apiProductService.getApiAuthor()
    ]).pipe(
      map(([product, authors]) => {   
        const extraInfoAuthor = authors.filter((author => author.id === product.id))[0]
        return { product, extraInfoAuthor}
      })
    );
  
  }

}
