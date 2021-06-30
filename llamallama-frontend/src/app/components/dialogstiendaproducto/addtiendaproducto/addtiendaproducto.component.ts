import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Producto } from 'src/app/models/producto.model';
import { Tienda } from 'src/app/models/tienda.model';
import { Tienda_producto } from 'src/app/models/tienda_producto.model';
import { CrudProductsService } from 'src/app/services/crud-products.service';
import { ProductsService } from 'src/app/services/products.service';
import { TiendaService } from 'src/app/services/tienda.service';

@Component({
  selector: 'app-addtiendaproducto',
  templateUrl: './addtiendaproducto.component.html',
  styleUrls: ['./addtiendaproducto.component.css']
})
export class AddtiendaproductoComponent implements OnInit {
  public tpForm: FormGroup;
  public tproduct = new Tienda_producto();

  products: Producto[];
  tiendas: Tienda[];

  constructor(private fb: FormBuilder, 
      public crudProductsService:CrudProductsService,
      public productService: ProductsService,
      public tiendaService: TiendaService,
      @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.initForm();
    this.getProducts();
    this.getTiendas();
  }

  initForm(){
    this.tpForm = this.fb.group({
      stock:['', Validators.required],
      precio:['', Validators.required],
      productoid:['', Validators.required],
      descuento:['', Validators.required]
    });
  }

  setTiendaProduct(){
    this.tproduct.stock=this.tpForm.get('stock')?.value;
    this.tproduct.precio= parseFloat(this.tpForm.get('precio')?.value);
    this.tproduct.tiendaid=this.data.idt;
    this.tproduct.productoid=this.tpForm.get('productoid')?.value;
    this.tproduct.descuento=parseFloat(this.tpForm.get('descuento')?.value)
  }

  registrarTiendaProducto(){
    this.setTiendaProduct();
    this.crudProductsService.createTienda_Producto(this.tproduct).subscribe((result:any)=>{
    });
    this.tpForm.reset();
  }

  getProducts(){
    this.productService.getProducts().subscribe((result:any)=>{
      this.products = result.data;
    });
  }

  getTiendas(){
    this.tiendaService.getTiendas().subscribe((result:any)=>{
      this.tiendas = result.data;
    });
  }


}
