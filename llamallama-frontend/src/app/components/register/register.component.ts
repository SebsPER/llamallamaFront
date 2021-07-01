import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente.model';
import { Tienda } from 'src/app/models/tienda.model';
import { RegisterService } from 'src/app/services/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registroUsuarioForm: FormGroup;
  public comprador = new Cliente();

  
  constructor(private fb: FormBuilder,
    private registerservice:RegisterService,
    private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.registroUsuarioForm=this.fb.group({
      nombre:['',Validators.required],
      password:['',Validators.required],
      dni:['',Validators.required],
      direccion:['',Validators.required],
      telefono:['',Validators.required],
      apellido_paterno:['',Validators.required],
      apellido_materno:['',Validators.required],
    });
  }
    

  setnewcliente(){
      this.comprador.nombre=this.registroUsuarioForm.get('nombre')?.value
      this.comprador.password=this.registroUsuarioForm.get('password')?.value
      this.comprador.dni=this.registroUsuarioForm.get('dni')?.value
      this.comprador.direccion=this.registroUsuarioForm.get('direccion')?.value
      this.comprador.telefono=this.registroUsuarioForm.get('telefono')?.value
      this.comprador.apellido_paterno=this.registroUsuarioForm.get('apellido_paterno')?.value
      this.comprador.apellido_materno=this.registroUsuarioForm.get('apellido_materno')?.value
  }

  createcliente(){
    this.setnewcliente()
    console.log(this.comprador)
    this.registerservice.createCliente(this.comprador).subscribe((result:any)=>{
      console.log(result.data)
    })
  }
 
}