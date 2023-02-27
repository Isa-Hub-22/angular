import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ApiProduct } from 'src/app/core/services/products/api/api-product_model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  @Input() public product?: ApiProduct;
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() public onRemove: EventEmitter<void> = new EventEmitter<void>();
  
  
  contador = 0
  onPress() {
    this.newItemEvent.emit()
  }
constructor(private router: Router){}

  public removeProduct(){
    this.onRemove.emit();
  }

  public editProduct(){
    this.router.navigate(['new-product'], { queryParams: {
      id: this.product?.id
    }});
  }

  public navigateToDetail(){
    if(this.product){
    this.router.navigate(['product-detail', this.product.id]);
   }
  }
}
