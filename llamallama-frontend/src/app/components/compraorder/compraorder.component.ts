import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Compra } from 'src/app/models/compra.model';
import { Tipo_pago } from 'src/app/models/tipo_pago.model';
import { OrderserviceService } from 'src/app/services/orderservice.service';

@Component({
  selector: 'app-compraorder',
  templateUrl: './compraorder.component.html',
  styleUrls: ['./compraorder.component.css']
})
export class CompraorderComponent implements OnInit {

  public CompraForm: FormGroup;
  public comprax = new Compra();

  public tipopago = new Tipo_pago();
  private idtipopago: number;

  tipos: Tipo_pago[];
  compras: Compra[];

  constructor(private fb: FormBuilder,
    public compraservice: OrderserviceService
    ) { }

  ngOnInit(): void {
    this.initForm();
    this.GetAllTipos();

  }
  initForm(){
    this.CompraForm= this.fb.group({
      id: ['',Validators.required],
      fecha: ['', Validators.required],
      direccion: ['', Validators.required],
      ciudad_envio:['', Validators.required],
      distrito_envio: ['', Validators.required],
      monto_total: ['', Validators.required],
      tipopagoid: ['', Validators.required],
      clienteid: ['', Validators.required]

    })

  }

  GetAllTipos(){
    this.compraservice.gettipopago().subscribe((result:any)=>{
      this.tipopago = result.data;
    })

  }
  getTipo(){
    this.compraservice.gettipopagoid(this.idtipopago).subscribe((result:any)=>{
      this.tipopago= result.data;
    })
  }

  setCompra(){
    this.comprax.id=this.CompraForm.get('id')?.value
    this.comprax.fecha=this.CompraForm.get('fecha')?.value
    this.comprax.direccion=this.CompraForm.get('direccion')?.value
    this.comprax.ciudad_envio=this.CompraForm.get('ciudad_envio')?.value
    this.comprax.distrito_envio=this.CompraForm.get('distrito_envio')?.value
    this.comprax.monto_total=this.CompraForm.get('monto_total')?.value
    this.comprax.tipopagoid=this.CompraForm.get('tipopagoid')?.value
    this.comprax.clienteid=this.CompraForm.get('clienteid')?.value
  }

  registrarCompra(){
    this.setCompra();
    console.log(this.comprax)
    this.compraservice.createCompra(this.comprax).subscribe((result:any)=>{
      console.log(result.data)
    });
  }

}
/*   
 */
