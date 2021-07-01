import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Compra } from '../models/compra.model';
import { Compra_producto } from '../models/compra_producto.model';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  constructor(private http: HttpClient) { }

  private API = 'https://app-llamallama.herokuapp.com/llamallama/v1/';

  createCompra(compra: Compra){
    return this.http.post(this.API + 'compras', compra);
  }

  createCompraProd(cp: Compra_producto){
    return this.http.post(this.API + 'compra_producto', cp);
  }

  getComprabyClienteId(id: number){
    return this.http.get(this.API + 'compracli' + '/' + id)
  }
}
