import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Compra } from '../models/compra.model';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  constructor(private http: HttpClient) { }

  private API = 'http://localhost:8080/llamallama/v1/'

  createCompra(compra: Compra){
    return this.http.post(this.API + 'compras', compra);
  }
}
