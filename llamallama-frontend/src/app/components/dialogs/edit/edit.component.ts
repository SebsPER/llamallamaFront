import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Producto } from 'src/app/models/producto.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public productEditForm: FormGroup;
  public producto = new Producto;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<EditComponent>, @Inject(MAT_DIALOG_DATA) public data:any, public productService:ProductsService) { }
  
  initForm(){
    this.productEditForm = this.fb.group({
      nombre:['', Validators.required],
      categoriaid:['',Validators.required]
    })
  }

  setProducto(){
    this.producto.id=this.data.id;
    this.producto.nombre=this.productEditForm.get('nombre')?.value;
    this.producto.categoriaid=this.productEditForm.get('categoriaid')?.value;
  }

  onNoClick(): void{
    this.dialogRef.close();
  }

  stopEdit(): void{
    this.setProducto();
    this.productService.editProduct(this.producto).subscribe((result:any)=>{
      console.log('Updated')
    });
  }

  ngOnInit(): void {
    this.initForm();
  }

}
