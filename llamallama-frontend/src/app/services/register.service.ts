import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { Tienda } from '../models/tienda.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private API = 'http://localhost:8080/llamallama/v1/'




  constructor(private http:HttpClient) { }


  createCliente(cliente: Cliente){
    return this.http.post(this.API+'clientes',cliente);
  }

  createTienda(tienda: Tienda){
    return this.http.post(this.API+'tienda',tienda);
  }
}
