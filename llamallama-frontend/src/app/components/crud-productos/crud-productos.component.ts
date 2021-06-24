import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/app/models/producto.model';
import { Tienda_producto } from 'src/app/models/tienda_producto.model';
import { CrudProductsService } from 'src/app/services/crud-products.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-crud-productos',
  templateUrl: './crud-productos.component.html',
  styleUrls: ['./crud-productos.component.css']
})
export class CrudProductosComponent implements OnInit {

  public tiendaProductForm: FormGroup;
  public tiendaProductito = new Tienda_producto();

  public product = new Producto();
  private idproducto: number;

  tienda_productos: Tienda_producto[];
  productos: Producto[];

  constructor(private fb: FormBuilder, 
    public tiendaProductoService: CrudProductsService, 
    public productService: ProductsService) { }

  ngOnInit(): void {
    this.initForm();
    this.showTiendaProducts();
    this.getAllProducts();
  }

  getAllProducts(){
    this.productService.getProducts().subscribe((result:any)=>{
      this.productos = result.data;
    })
  }

  getProduct(){
    this.productService.getProductbyId(this.idproducto).subscribe((result:any)=>{
      this.product = result.data;
    })
  }

  showTiendaProducts(){
    this.tiendaProductoService.getAll().subscribe((result:any)=>{
      console.log(result.data)
      this.tienda_productos = result.data;
    })
  }

  initForm(){
    this.tiendaProductForm = this.fb.group({
      productoid:['', Validators.required],
      tiendaid:['', Validators.required],
      precio:['', Validators.required],
      stock:['', Validators.required],
      descuento:['', Validators.required]
    })
  }

  setTiendaProducto(){
    this.tiendaProductito.productoid=this.tiendaProductForm.get('productoid')?.value //select
    this.tiendaProductito.tiendaid=this.tiendaProductForm.get('tiendaid')?.value //select
    this.tiendaProductito.precio=this.tiendaProductForm.get('precio')?.value
    this.tiendaProductito.stock=this.tiendaProductForm.get('stock')?.value
    this.tiendaProductito.descuento=this.tiendaProductForm.get('descuento')?.value
  }

  registrarTiendaProducto() {
    this.setTiendaProducto();
    console.log(this.tiendaProductito)
    this.tiendaProductoService.createTienda_Producto(this.tiendaProductito).subscribe((result:any)=>{
      console.log(result.data)
    });
    this.showTiendaProducts();
  }

}
