import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tienda } from '../models/tienda.model';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  private API = 'http://localhost:8080/llamallama/v1/'

  constructor(private http: HttpClient) { }

  getTiendas(): Observable<Tienda>{
    return this.http.get<Tienda>(this.API + 'tienda');
  }
}
