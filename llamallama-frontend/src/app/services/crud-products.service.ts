import { Injectable } from '@angular/core';
import { Tienda_producto } from '../models/tienda_producto.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudProductsService {

  //private API = 'https://app-llamallama.herokuapp.com/llamallama/v1/';
  private API = 'http://localhost:8080/llamallama/v1/'


  constructor(private http: HttpClient) {

  }

  getAll(): Observable<Tienda_producto>{
    return this.http.get<Tienda_producto>(this.API + "tienda_producto");
  }

  createTienda_Producto(product: Tienda_producto){
    return this.http.post(this.API + 'tienda_producto', product);
  }

  update(product: any): Observable<any>{
    //modificar
    return this.http.put(this.API + 'products', 'tpUpdate/{tiendaid}/{productoid}/{stock}/{precio}/{descuento}');
  }
  
}
