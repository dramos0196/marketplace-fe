import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListService } from 'src/app/services/product-list.service';

import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ProductListRoutingModule
  ],
  providers: [
    ProductListService
  ]
})
export class ProductListModule { }
