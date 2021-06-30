import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tienda_producto } from 'src/app/models/tienda_producto.model';
import { CrudProductsService } from 'src/app/services/crud-products.service';

@Component({
  selector: 'app-edittiendaproducto',
  templateUrl: './edittiendaproducto.component.html',
  styleUrls: ['./edittiendaproducto.component.css']
})
export class EdittiendaproductoComponent implements OnInit {

  public tpEditForm: FormGroup;
  public tpProduct = new Tienda_producto();


  constructor(public dialogRef: MatDialogRef<EdittiendaproductoComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any, public tiendaProductoService: CrudProductsService, private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.data);
    this.initForm();
  }

  initForm(){
    this.tpEditForm = this.fb.group({
      productoid:['', Validators.required],
      tiendaid:['',Validators.required],
      precio:['',Validators.required],
      stock:['',Validators.required],
      descuento:['',Validators.required]
    });
  }

  settpProduct(){
    this.tpProduct.stock=this.tpEditForm.get('stock')?.value;
    this.tpProduct.precio= parseFloat(this.tpEditForm.get('precio')?.value);
    this.tpProduct.tiendaid=this.data.idt;
    this.tpProduct.productoid=this.data.productoid;
    this.tpProduct.descuento=parseFloat(this.tpEditForm.get('descuento')?.value)
  }

  onNoClick(): void{
    this.dialogRef.close();
  }

  stopEdit(){
    this.settpProduct();
    this.tiendaProductoService.update(this.tpProduct).subscribe((result:any)=>{
      console.log(result.data);
    });
  }

}
