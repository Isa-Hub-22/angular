import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/core/services/products/product.model';
import { Component } from '@angular/core';
import { products } from 'src/app/core/services/products/product_data';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { catchError, filter, forkJoin, map, Observable, tap } from 'rxjs';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

  public product?: Product;
  public extraInfoAuthor: any;

  constructor(
    private activatedRoute:ActivatedRoute,
    private ProductsService: ProductsService
    ) {      
      this.activatedRoute.params.subscribe(async (params) => {
        const productId = params ['id'];
        this.ProductsService.prueba(productId).subscribe((res) => {
          const { extraInfoAuthor, product } = res
          this.extraInfoAuthor = extraInfoAuthor
          this.product = product;
        })
    })
  }

  ngOnInit() {
    
            this.activatedRoute.params.subscribe((params) => {
          const productId = params ['id'];
        forkJoin([
          this.ProductsService.getProductDetail(productId),
          this.ProductsService.getAuthor()
        ]).pipe(
          map(([product, authors]) => {
           
            const extraInfoAuthor = authors.filter((author => author.id === product.id))[0]
            this.extraInfoAuthor = extraInfoAuthor
            this.product = product;
            return
          })
        );
      })
  };
  

}
