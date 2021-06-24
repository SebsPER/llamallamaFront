import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Compra_producto } from '../models/compra_producto.model';

@Injectable({
  providedIn: 'root'
})
export class CompraserviceService {

  //private API = 'https://app-llamallama.herokuapp.com/llamallama/v1/';
  private API = 'http://localhost:8080/llamallama/v1/'

  constructor(private http:HttpClient) { }

  createCompra_Producto(compra_producto: Compra_producto){
    return this.http.post(this.API+'compra_producto', compra_producto)
  }

  getComprabyId(id: number){
    return this.http.get(this.API+'compra'+'/'+id)
    
  }

  getProductoById(id: number){
    return this.http.get(this.API+'producto'+'/'+id)
  }

  getTiendabyId(id: number){
    return this.http.get(this.API+'tienda'+'/'+id)
  }

  getCompraProducto(){
    return this.http.get(this.API+'compra_productos')
  }


}
