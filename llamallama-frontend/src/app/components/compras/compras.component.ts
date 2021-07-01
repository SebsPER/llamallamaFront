import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/models/cliente.model';
import { Compra } from 'src/app/models/compra.model';
import { CompraService } from 'src/app/services/compra.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  cliente = new Cliente();
  idCliente: number;
  displayedColumns: string[] = ['fecha', 'direccion', 'ciudad', 'distrito', 'monto', 'tipopagoid']

  compras: Compra[];

  constructor(private loginservice: LoginService, private router: ActivatedRoute, private compraService: CompraService) { }

  ngOnInit(): void {
    this.idCliente = Number(this.router.snapshot.paramMap.get('id'));
    this.obtnerDatosCliente();
    this.obtenerCompras();
  }

  obtenerCompras(){
    this.compraService.getComprabyClienteId(this.idCliente).subscribe((result:any)=>{
      console.log(result.data);
      this.compras=result.data;
    });
  }

  obtnerDatosCliente(){
    this.idCliente = Number(this.router.snapshot.paramMap.get('id'))
    this.loginservice.getClientebyId(this.idCliente).subscribe((result:any)=>{
      console.log(result.data);
      this.cliente=result.data;
    });
  }


}
