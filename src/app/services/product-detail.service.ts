import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  constructor(private http: HttpClient) { }


  /**
   * Servicio para obetener el detalle de un producto dado el ID
   * @param id Id del producto seleccionado
   * @returns Devuelve el objeto detalle del producto
   */
  getProductDetail(id: string): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('id', id);
    return this.http.get('http://localhost:3000/items', { params: queryParams });
  }
}
