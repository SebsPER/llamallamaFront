import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private API = 'https://app-llamallama.herokuapp.com/llamallama/v1/';

  constructor(private http: HttpClient) { }
  

  getProductoByName(){
    
  }

  
}
