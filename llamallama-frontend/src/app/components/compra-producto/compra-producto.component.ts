import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Compra_producto } from 'src/app/models/compra_producto.model';
import { Tienda_producto } from 'src/app/models/tienda_producto.model';
import { CrudProductsService } from 'src/app/services/crud-products.service';
import { ExplorerService } from 'src/app/services/explorer.service';
import { CarritocompradialogComponent } from '../buydialogs/carritocompradialog/carritocompradialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-compra-producto',
  templateUrl: './compra-producto.component.html',
  styleUrls: ['./compra-producto.component.css']
})
export class CompraProductoComponent implements OnInit {

  public tienda_productos: Tienda_producto[];

  @Input() cantidad:number;

  public busquedaForm: FormGroup;
  public cantidadForm: FormGroup;
  private idcliente: Number;

  public carro: any[];

  constructor(private fb: FormBuilder,
    public crudProductoService: CrudProductsService,
    private explorerService: ExplorerService,
    private dialog: MatDialog,
    public router:ActivatedRoute) { 
  }

  ngOnInit(): void {
    //this.getProducts();
    this.idcliente= Number(this.router.snapshot.paramMap.get('id'))
    this.initForm();
    this.explorerService.getTps().subscribe((result:any)=>{
      console.log(result.data);
      this.tienda_productos = result.data;
    });
    this.cantidadForm = this.fb.group({
      cantidad:['', Validators.required]
    });
    this.carro=[];
  }

  initForm(){
    this.busquedaForm = this.fb.group({
      texto:['', Validators.required]
    });
  }

  getProducts(){
    this.crudProductoService.getAll().subscribe((result:any)=>{
      this.tienda_productos = result.data;
    });
  }

  addToCart(precio:number, productoid:number, tiendaid:number){
    var cantidad = this.cantidadForm.get('cantidad')?.value;
    if(cantidad > 0){
      let item = {
        productoid: productoid,
        precio: precio,
        cantidad: cantidad,
        tiendaid: tiendaid
      }
      this.carro.push(item);
      console.log(item)
    }
    localStorage.setItem("carrito", JSON.stringify(this.carro));
    
  }

  busquedaNomProd(): void {
    //this.tienda_productos = [];
    var texto: String = this.busquedaForm.get('texto')?.value;
    if (texto == ''){
      this.explorerService.getTps().subscribe((result:any)=>{
        console.log(result.data);
        this.tienda_productos = result.data;
      })
    }
    else {
      this.explorerService.getProductosByNameProd(texto).subscribe((result:any)=>{
        console.log(result.data);
        this.tienda_productos = result.data;
      })
    }
  }

  showCart(){
    const dialogRef = this.dialog.open(CarritocompradialogComponent,{
      data: {idc: this.idcliente }
    });
  }

}
