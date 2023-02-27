import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/core/services/products/product.model';
import { switchMap, map, of } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { ApiProduct } from 'src/app/core/services/products/api/api-product_model';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

    public productForm?: FormGroup;
    public urlImg: string = '';
    public canEdit: boolean = false;
    public productId?: string;

    constructor (
      private fb: FormBuilder,
      private activatedRoute: ActivatedRoute,
      private ProductsService: ProductsService,
      private router: Router
    ){
      this.activatedRoute.queryParams.pipe(
        map((queryParams) => queryParams['id']),
        switchMap((id: string) => {
          if (!id) {
            return of(undefined);
          } else {
            this.productId = id;
            return this.ProductsService.getProductDetail(id);
          }
        }),
        ).subscribe((product?: Product) => {
            this.canEdit = !!product;
            this.createNewForm(product);
        });
       
    }


    public createNewForm(product?: Product) {

      this.productForm = this.fb.group({
        name: new FormControl(product?.name || '', [Validators.required]),
        color: new FormControl(product?.color || '', [Validators.required]),
        price: new FormControl(product?.price || '', [Validators.required, Validators.maxLength(6)]),
        img: new FormControl(product?.img || '', [Validators.required]),
        description: new FormControl(product?.description || '', [Validators.required])
      });
      }

    public ngOnInit() {
      this.productForm?.get('img')?.valueChanges.subscribe((value) => {
       
        if (!value) { return; }
        this.urlImg = value
      });
    }
  
    public createNewProduct(){
      if (!this.productForm?.valid) { return; }
      const productRequest = this.canEdit && this.productId
      ? this.ProductsService.editProduct(this.productId, this.productForm?.value)
      : this.ProductsService.createProduct(this.productForm?.value);
      productRequest.subscribe(() => {
        this.productForm?.reset();
        this.router.navigate(['list']);
      });
  
    }
  
  }

