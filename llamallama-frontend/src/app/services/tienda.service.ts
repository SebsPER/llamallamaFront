import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tienda } from '../models/tienda.model';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  private API = 'https://app-llamallama.herokuapp.com/llamallama/v1/';

  constructor(private http: HttpClient) { }

  getTiendas(): Observable<Tienda>{
    return this.http.get<Tienda>(this.API + 'tienda');
  }
}
