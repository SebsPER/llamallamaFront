import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private API = 'https://app-llamallama.herokuapp.com/llamallama/v1/';


  constructor(private http: HttpClient) { }

  getProducts(): Observable<Producto>{
    return this.http.get<Producto>(this.API + "products");
  }

  createProducto(product: Producto){
    return this.http.post(this.API + 'products', product);
  }

  editProduct(p: Producto){
    return this.http.put(this.API + 'products' + '/' + p.id + '/' + p.nombre + '/' + p.categoriaid, p);
  }

  getProductbyId(id: number){
    return this.http.get(this.API + 'productn' + '/' + id)
  }

  deleteById(id:number){
    return this.http.delete(this.API + 'productdi' + '/' + id)
  }

}
