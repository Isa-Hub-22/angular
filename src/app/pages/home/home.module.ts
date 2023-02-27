import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeBloque1Component } from './home-bloque1/home-bloque1.component';
import { HomeBloque2Component } from './home-bloque2/home-bloque2.component';
import { HomeBloque3Component } from './home-bloque3/home-bloque3.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeBloque1Component,
    HomeBloque2Component,
    HomeBloque3Component
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
