import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/app/models/producto.model';
import { ProductsService } from 'src/app/services/products.service';
import { ProductosComponent } from '../../productos/productos.component'; 

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public productForm: FormGroup;
  public product = new Producto;

  constructor(private fb: FormBuilder, public productService: ProductsService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.productForm = this.fb.group({
      nombre:['', Validators.required],
      categoriaid:['', Validators .required]
    })
  }

  setProducto(){
    this.product.categoriaid=this.productForm.get('categoriaid')?.value;
    this.product.nombre=this.productForm.get('nombre')?.value;
  }

  registrarProducto(){
    this.setProducto();
    console.log(this.product)
    this.productService.createProducto(this.product).subscribe((result:any)=>{
      console.log(result.data)
    });
  }

}
