import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private API = 'http://localhost:8080/llamallama/v1/'

  constructor(private http: HttpClient) { }
  

  getProductoByName(){
    
  }

  
}
