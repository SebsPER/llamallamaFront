import { prepareSyntheticPropertyName } from '@angular/compiler/src/render3/util';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Tienda_producto } from 'src/app/models/tienda_producto.model';
import { CrudProductsService } from 'src/app/services/crud-products.service';
import { ProductsService } from 'src/app/services/products.service';
import { AddtiendaproductoComponent } from '../dialogstiendaproducto/addtiendaproducto/addtiendaproducto.component';
import { DeletetiendaproductoComponent } from '../dialogstiendaproducto/deletetiendaproducto/deletetiendaproducto.component';
import { EdittiendaproductoComponent } from '../dialogstiendaproducto/edittiendaproducto/edittiendaproducto.component';

@Component({
  selector: 'app-crud-productos',
  templateUrl: './crud-productos.component.html',
  styleUrls: ['./crud-productos.component.css']
})
export class CrudProductosComponent implements OnInit {

  public tiendaProductForm: FormGroup;
  public idcliente: number;
  //Data Source y Columnas para la tabla
  public dataSource: MatTableDataSource<Tienda_producto[]>;
  displayedColumns = ['productoid', 'prodN', 'precio', 'stock', 'descuento', 'catN', 'actions']
  
  constructor(private fb: FormBuilder, public tiendaProductoService: CrudProductsService, 
    public productService: ProductsService, private dialog: MatDialog,
    public router: ActivatedRoute) { }

  ngOnInit(): void {
    this.idcliente= Number(this.router.snapshot.paramMap.get('id'))
    this.loadData();
    this.initForm();
  }

  loadData(){
    this.tiendaProductoService.getTPbyTid(this.idcliente).subscribe((result:any)=>{
      this.dataSource=result.data;
    });
  }

  initForm(){
    this.tiendaProductForm = this.fb.group({
      productoid:['', Validators.required],
      precio:['', Validators.required],
      stock:['', Validators.required],
      descuento:['', Validators.required]
    });
  }

  toparseFloat(n: string){
    return parseFloat(n);
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(filterValue);
  }

  addNew(){
    const dialogRef = this.dialog.open(AddtiendaproductoComponent,{
      data: {idt: this.idcliente}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.loadData();
    });
    dialogRef.afterClosed().subscribe(result=>{
      this.loadData();
    });
  }

  deleteItem(productoid: number, prodN:string, precio:number, stock:number, descuento:number, catN:string, tiendaid:number){
    const dialogRef = this.dialog.open(DeletetiendaproductoComponent, {
      data: {productoid:productoid, prodN: prodN, precio:precio, stock:stock, descuento:descuento, catN:catN, tiendaid:tiendaid}
    });
    dialogRef.afterClosed().subscribe(result=>{
      this.loadData();
    });
  }

  editItem(productoid: number, prodN:string, precio:number, stock:number, descuento:number, catN:string, tiendaid:number){
    const dialogRef = this.dialog.open(EdittiendaproductoComponent, {
      data: {productoid:productoid, prodN: prodN, precio:precio, stock:stock, descuento:descuento, catN:catN, tiendaid:tiendaid}
    });
    dialogRef.afterClosed().subscribe(result=>{
      this.loadData();
    });
  }
}
