import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente.model';
import { Producto } from 'src/app/models/producto.model';
import { ExplorerService } from 'src/app/services/explorer.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-headercliente',
  templateUrl: './headercliente.component.html',
  styleUrls: ['./headercliente.component.css']
})
export class HeaderclienteComponent implements OnInit {

  public cliForm: FormGroup;
  private idcliente: number;
  public cliente = new Cliente();
  
  constructor(private loginservice: LoginService,
    private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.idcliente= Number(this.router.snapshot.paramMap.get('id'))
    this.loginservice.getClientebyId(this.idcliente).subscribe((result:any)=>{
      console.log(result.data);
      this.cliente=result.data;
    })
    }



}
