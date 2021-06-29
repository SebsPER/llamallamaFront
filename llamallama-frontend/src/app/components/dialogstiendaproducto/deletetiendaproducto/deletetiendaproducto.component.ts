import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CrudProductsService } from 'src/app/services/crud-products.service';
import { DeleteComponent } from '../../dialogs/delete/delete.component';

@Component({
  selector: 'app-deletetiendaproducto',
  templateUrl: './deletetiendaproducto.component.html',
  styleUrls: ['./deletetiendaproducto.component.css']
})
export class DeletetiendaproductoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any, public tiendaProductoService: CrudProductsService) { }

  ngOnInit(): void {
  }

  onNoClick(){
    this.dialogRef.close();
  }

  confirmDelete(): void{
    this.tiendaProductoService.delete(this.data.tiendaid, this.data.productoid).subscribe((result:any)=>{
      console.log("eliminado");
    });
    this.dialogRef.close();
  }

}
