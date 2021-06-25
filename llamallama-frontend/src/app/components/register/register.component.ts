import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente.model';
import { Tienda } from 'src/app/models/tienda.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registroUsuarioForm: FormGroup;
  public comprador = new Cliente();
  public vendedor = new Tienda();

  
  constructor() { }

  ngOnInit(): void {
  }

 
}