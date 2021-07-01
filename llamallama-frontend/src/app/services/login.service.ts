import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private API = 'https://app-llamallama.herokuapp.com/llamallama/v1/';


  constructor(private http:HttpClient) { }

  getClientebyId(id: number){
    return this.http.get(this.API+'cliente'+'/'+id)
  }

  getAuthCliente(dni:number, pass: string){
    return this.http.get(this.API+'clienteTen'+'/'+dni+'/'+pass)
  }

  getTiendabyId(id :number){
    return this.http.get(this.API+'tienda'+'/'+id)
  }

  getAuthTienda(ruc: number, pass:string){
    return this.http.get(this.API+'tiend'+'/'+pass+'/'+ruc)
  }


  /*getAuthTienda(){
    return this.http.get(this.API+'')
  }*/

}
