import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductListService } from 'src/app/services/product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList: any = {};

  constructor(private productListService: ProductListService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // Obtiene el termino de busqueda enviado en el parametro de la URL
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.getProductList(params['search']);
      }
    );
  }



  /**
   * Funcion que llama a servicio REST para obetener los productos dado
   * el termino de busqueda
   * @param query Termino de busqueda
   */
  getProductList(query: string): void {
    this.productListService.getProductList(query)
      .subscribe(products => this.productList = products);
  }

}
