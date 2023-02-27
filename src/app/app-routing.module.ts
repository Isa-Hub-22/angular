import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },

  {
    path: 'list',
    loadChildren: () =>
      import('./pages/list/list.module').then((m) => m.ListModule),
  },

  {
    path: 'product-detail/:id',
    loadChildren: () =>
      import('./pages/product-detail/product-detail.module').then(
        (m) => m.ProductDetailModule
      ),
  },

  {
    path: 'new-product',
    loadChildren: () =>
      import('./pages/new-product/new-product.module').then(
        (m) => m.NewProductModule
      ),
  },
  {
    path: 'product-my-list',
    loadChildren: () =>
      import('./pages/product-my-list/product-my-list.module').then(
        (m) => m.ProductMyListModule
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module').then(
        (m) => m.AboutModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
