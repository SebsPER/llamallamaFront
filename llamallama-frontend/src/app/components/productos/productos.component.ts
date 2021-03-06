import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Producto } from 'src/app/models/producto.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categoria } from 'src/app/models/categoria.model';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { AddComponent } from '../dialogs/add/add.component';
import { DeleteComponent } from '../dialogs/delete/delete.component';
import { EditComponent } from '../dialogs/edit/edit.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  public productForm: FormGroup;
  public productito = new Producto;
  public categoria = new Categoria;
  products: Producto[];
  id:number;
  index: number;

  public dataSource: MatTableDataSource<Producto>;
  displayedColumns = ['id', 'nombre', 'categoriaid', 'actions']

  constructor(public httpCliente: HttpClient, private fb: FormBuilder, public productService: ProductsService, public dialog: MatDialog) { 

  }

  ngOnInit(): void {
    this.loadData();
    this.initForm();
  }

  loadData(){
    this.productService.getProducts().subscribe((result:any)=>{
      this.dataSource=result.data;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.loadData();
  }

  initForm(){
    this.productForm = this.fb.group({
      categoriaid: ['', Validators.required],
      nombre: ['', Validators.required]
    })
  }

  addNew(){
    const dialogRef = this.dialog.open(AddComponent);
    dialogRef.afterClosed().subscribe(result =>{
      this.loadData();
    });
  }

  deleteItem(i:number, id: number, nombre: string, categoriaid: number){
    this.index = i;
    this.id = id;
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: {id:id, nombre:nombre, categoriaid:categoriaid}
    });
    dialogRef.afterClosed().subscribe(result=>{
      this.loadData();
    });
  }

  onEdit(i:number, id:number, nombre:string, categoriaid:number){
    const dialogRef = this.dialog.open(EditComponent, {
      data: {id:id, nombre:nombre, categoriaid:categoriaid}
    });
    dialogRef.afterClosed().subscribe(result=>{
      this.loadData();
    });
  }
}
