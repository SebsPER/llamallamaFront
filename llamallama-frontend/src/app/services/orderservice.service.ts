import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compra } from '../models/compra.model';
import { Tipo_pago } from '../models/tipo_pago.model';

@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {
  //private API = 'https://app-llamallama.herokuapp.com/llamallama/v1/';
  private API = 'http://localhost:8080/llamallama/v1/'



  constructor(private http:HttpClient) { }

  getCompra(){
    return this.http.get(this.API+'compras')
  }

  createCompra(compra: Compra){
    return this.http.post(this.API+'compras', compra);
  }

  gettipopago(): Observable<Tipo_pago>{
    return this.http.get<Tipo_pago>(this.API+'tipodepagos');
  }

  gettipopagoid(id: number){
    return this.http.get(this.API+'tipodepago'+'/'+id)
  }

}
