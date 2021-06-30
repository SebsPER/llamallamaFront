import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/models/cliente.model';
import { LoginService } from 'src/app/services/login.service';
import { HeaderclienteComponent } from '../headercliente/headercliente.component';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent implements OnInit {

  private idcliente: number;
  public cliente = new Cliente()
  constructor(private loginservice: LoginService,
    private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.idcliente=Number(this.router.snapshot.paramMap.get('id'))
    this.loginservice.getClientebyId(this.idcliente).subscribe((result:any)=>{
      console.log(result.data);
      this.cliente=result.data;
    })
  }

  



}
