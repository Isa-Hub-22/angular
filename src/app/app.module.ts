
import { ProductDetailModule } from './pages/product-detail/product-detail.module';
import { ListModule } from './pages/list/list.module';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutModule } from './pages/about/about.module'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewProductModule } from './pages/new-product/new-product.module';
import { HttpClientModule} from '@angular/common/http';
import { AppPipesModule } from  './app-pipes.module'
import { ProductMyListModule } from './pages/product-my-list/product-my-list.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ListModule,
    ProductDetailModule,
    NewProductModule,
    ProductMyListModule,
    AppPipesModule,
    HttpClientModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
