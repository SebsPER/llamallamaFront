import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Tienda } from 'src/app/models/tienda.model';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-registertienda',
  templateUrl: './registertienda.component.html',
  styleUrls: ['./registertienda.component.css']
})
export class RegistertiendaComponent implements OnInit {

  public registroUsuarioForm: FormGroup;
  public tienda = new Tienda();

  
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
      ruc:['',Validators.required],
      razon_social:['',Validators.required],
      nombre_encargado:['',Validators.required],
      direccion:['',Validators.required],
    });
  }
    

  setnewcliente(){
      this.tienda.nombre=this.registroUsuarioForm.get('nombre')?.value
      this.tienda.password=this.registroUsuarioForm.get('password')?.value
      this.tienda.ruc=this.registroUsuarioForm.get('ruc')?.value
      this.tienda.direccion=this.registroUsuarioForm.get('direccion')?.value
      this.tienda.razon_social=this.registroUsuarioForm.get('razon_social')?.value
      this.tienda.nombre_encargado=this.registroUsuarioForm.get('nombre_encargado')?.value
      
  }

  createcliente(){
    this.setnewcliente()
    console.log(this.tienda)
    this.registerservice.createTienda(this.tienda).subscribe((result:any)=>{
      console.log(result.data)
    })
  }

}
