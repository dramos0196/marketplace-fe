import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductDetailService } from 'src/app/services/product-detail.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productDetail: any = {};

  constructor(private activatedRoute: ActivatedRoute, private productDetailService: ProductDetailService) { }

  ngOnInit(): void {
    // Obtiene el ID del producto seleccionado enviado en el parametro de la URL
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.getProductDetail(params['id']);
      }
    );
  }

  /**
   * Funcion que llama a servicio REST para obetener el detalle de un producto 
   * dado el ID del producto seleccionado
   * @param productId Id del producto seleccionado
   */
  getProductDetail(productId: string): void {
    this.productDetailService.getProductDetail(productId)
      .subscribe(product => this.productDetail = product.item);
  }

}
