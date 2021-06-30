import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Compra } from 'src/app/models/compra.model';
import { Compra_producto } from 'src/app/models/compra_producto.model';
import { CompraService } from 'src/app/services/compra.service';

@Component({
  selector: 'app-carritocompradialog',
  templateUrl: './carritocompradialog.component.html',
  styleUrls: ['./carritocompradialog.component.css']
})
export class CarritocompradialogComponent implements OnInit {

  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;
  public thirdFormGroup: FormGroup;
  public compraid: number = 0;

  public compra = new Compra();
  public cp = new Compra_producto();

  public shop_cart: any[];
  public total: number = 0;

  constructor(private fb: FormBuilder, public compraService: CompraService,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.initForm();
    this.shop_cart = JSON.parse(localStorage.getItem("carrito")!);
    this.calcularTotal();
  }

  initForm(){
    this.firstFormGroup = this.fb.group({
      monto_total: ['', Validators.required],
    });
    this.secondFormGroup = this.fb.group({
      direccion: ['', Validators.required],
      ciudad_envio: ['', Validators.required],
      distrito_envio: ['', Validators.required]
    });
    this.thirdFormGroup = this.fb.group({
      cliente_id:['', Validators.required],
      tipopago_id: ['', Validators.required]
    });
  }

  calcularTotal(){
    if(this.shop_cart.length > 0){
      for (let i of this.shop_cart){
        this.total += i.precio * i.cantidad;
      }
      console.log(this.total);
    } 
  }

  setCompra(){
    this.compra.direccion=this.secondFormGroup.get('direccion')?.value;
    this.compra.ciudad_envio=this.secondFormGroup.get('ciudad_envio')?.value;
    this.compra.distrito_envio=this.secondFormGroup.get('distrito_envio')?.value;
    this.compra.tipopagoid=this.thirdFormGroup.get('tipopago_id')?.value;
    this.compra.clienteid=this.data.idc;
    this.compra.monto_total=this.firstFormGroup.get('monto_total')?.value;
    this.compra.fecha='03/07/2021';
    console.log(this.compra);
  }

  comprar(){
    this.setCompra();
    this.compraService.createCompra(this.compra).subscribe((result:any)=>{
      console.log(result.data);
      this.compraid = result.data.id;
      this.cp.compraId = result.data.id;
      console.log(this.compraid);
      this.details();
    });
  }

  details() {
    for (let i = 0; i < this.shop_cart.length; i++) { 
      this.cp.cantproductos = this.shop_cart[i].cantidad;
      this.cp.productoId = this.shop_cart[i].productoid;
      this.cp.tiendaid = this.shop_cart[i].tiendaid;
      //this.cp.compraId = this.compraid;
      console.log(this.cp);
      this.compraService.createCompraProd(this.cp).subscribe((result:any)=>{
        console.log(result.data);
      });
    }
    localStorage.removeItem('carrito');
  }
}
