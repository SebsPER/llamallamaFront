import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria.model';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ExplorerService {

  //private API = 'https://app-llamallama.herokuapp.com/llamallama/v1/';
  private API = 'http://localhost:8080/llamallama/v1/'

  constructor(private http:HttpClient) { }


  getProductos(){
    return this.http.get(this.API+ 'products')
  }

  getProductosByNameProd(nombreP: String){
    return this.http.get(this.API+'tienda_producton'+'/'+ nombreP)
  }

  getProductosByCat(nombreC: String){
    return this.http.get(this.API+'tienda_productoc'+'/'+ nombreC)
  }

  getProductosByNameTienda(nombreT: String){
    return this.http.get(this.API+'tienda_productons'+'/'+ nombreT)
  }

  getTps(){
    return this.http.get(this.API+'tienda_producto')
  }

}

