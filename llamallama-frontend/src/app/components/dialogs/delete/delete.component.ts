import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Producto } from 'src/app/models/producto.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteComponent>, @Inject(MAT_DIALOG_DATA) public data:any, public productService:ProductsService) { }

  ngOnInit(): void {
  }

  onNoClick(){
    this.dialogRef.close();
  }

  confirmDelete(): void{
    this.productService.deleteById(this.data.id).subscribe((result:any)=>{
      console.log('Eliminado')
    });
    this.dialogRef.close();
  }
}
