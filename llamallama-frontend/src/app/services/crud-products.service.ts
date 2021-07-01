import { Injectable } from '@angular/core';
import { Tienda_producto } from '../models/tienda_producto.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tienda } from '../models/tienda.model';

@Injectable({
  providedIn: 'root'
})

export class CrudProductsService {

  private API = 'https://app-llamallama.herokuapp.com/llamallama/v1/';
  constructor(private http: HttpClient) {

  }

  getAll(): Observable<Tienda_producto>{
    return this.http.get<Tienda_producto>(this.API + "tienda_producto");
  }

  createTienda_Producto(product: Tienda_producto){
    return this.http.post(this.API + 'tienda_producto', product);
  }

  update(tp: Tienda_producto){
    return this.http.put<Tienda_producto>(this.API + 'tpUpdate' + '/' + tp.tiendaid + '/'+ tp.productoid +'/' + tp.stock + '/' + tp.precio +'/'+ tp.descuento, tp);
  }
  
  delete(tiendaid: number, productoid: number){
    return this.http.delete(this.API + 'tiendaProducto' + '/' + tiendaid + '/' + productoid);
  }

  getTPbyTid(id:number): Observable<Tienda_producto>{
    return this.http.get<Tienda_producto>(this.API+'tienda_producto'+'/'+id);
  }
}
