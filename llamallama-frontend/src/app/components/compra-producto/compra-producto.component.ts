import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compra-producto',
  templateUrl: './compra-producto.component.html',
  styleUrls: ['./compra-producto.component.css']
})
export class CompraProductoComponent implements OnInit {

  constructor() { 

    this.grabarLocalStorage();
  }

  ngOnInit(): void {
  }

  obtenerLocalStorage(){
    let nombre = localStorage.getItem("nombre");
    let producto = JSON.parse( localStorage.getItem("producto") );

    console.log(nombre);
    console.log(producto);
  }

  grabarLocalStorage(){
    let nombre:string = "Raul";

    let producto = {
      id: 1,
      nombre: "leche",
      data: {
        precio: 10,
        descuento: 1,
        camtidad: 2
      }
    }

    localStorage.setItem("nombre", nombre);
    localStorage.setItem("producto", JSON.stringify(producto));

  }

  

}
