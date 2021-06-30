import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Compra } from 'src/app/models/compra.model';
import { Compra_producto } from 'src/app/models/compra_producto.model';
import { Producto } from 'src/app/models/producto.model';
import { CompraserviceService } from 'src/app/services/compraservice.service';

@Component({
  selector: 'app-comprac',
  templateUrl: './comprac.component.html',
  styleUrls: ['./comprac.component.css']
})
export class CompracComponent implements OnInit {
  public compraform: FormGroup;
  public producto =  new Producto();
  //public compras = new Compra();
  public compraprod = new Compra_producto();
  private idproducto: number;
  private idcompra: number;

  private compra_productox: Compra_producto[];

  constructor(private fb:FormBuilder,
    private compraservice: CompraserviceService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.idproducto = Number(this.route.snapshot.paramMap.get('id'))
    this.getProductobyId();
    //this.idcompra= Number(this.route.snapshot.paramMap.get('id'))
    //this.getComprabyId();
    this.initForm();
    this.compraservice.getCompraProducto().subscribe((result:any)=>{
      console.log(result.data);
      this.compraprod = result.data;
    })
  }


  getProductobyId(){
    this.compraservice.getProductoById(this.idproducto).subscribe((result: any) =>{
      this.producto=result.data
    })

  }
  /*getComprabyId(){
    this.compraservice.getComprabyId(this.idcompra).subscribe((result:any)=>{
      this.compras=result.data
    })
  }*/

  initForm(){
    this.compraform = this.fb.group({
      compraid: ['', Validators.required],
      cant_productos: [ '', Validators.required],
      tiendaid: ['',Validators.required]
    });
  }
  setProCro(){
    this.compraprod.compraId= this.compraform.get('compraid')?.value;
    this.compraprod.productoId=this.idproducto;
    this.compraprod.cantproductos=this.compraform.get('cant_productos')?.value;
    this.compraprod.tiendaid=this.compraform.get('tiendaid')?.value;
  }

  createCompraProducto(){
    this.setProCro()
    this.compraservice.createCompra_Producto(this.compraprod).subscribe((result:any)=>{
      console.log(result.data)
    })
  }

}
