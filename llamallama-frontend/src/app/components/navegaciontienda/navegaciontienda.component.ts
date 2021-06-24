import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { Tienda } from 'src/app/models/tienda.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tienda_producto } from 'src/app/models/tienda_producto.model';
import { ExplorerService } from 'src/app/services/explorer.service';

@Component({
  selector: 'app-navegaciontienda',
  templateUrl: './navegaciontienda.component.html',
  styleUrls: ['./navegaciontienda.component.css']
})
export class NavegaciontiendaComponent implements OnInit {

  //public productos: Producto[];
  public tps: Tienda_producto[];
  public busquedaForm: FormGroup;
  

  constructor(private explorerservice:ExplorerService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    this.explorerservice.getTps().subscribe((result:any)=>{
      console.log(result.data);
      this.tps = result.data;
    })
  }

  initForm(){
    this.busquedaForm = this.fb.group({
      texto:['', Validators.required]
    })
  }

  busquedaNomProd(): void {
    this.tps = [];
    var texto: String = this.busquedaForm.get('texto')?.value;
    if (texto == ''){
      this.explorerservice.getTps().subscribe((result:any)=>{
        console.log(result.data);
        this.tps = result.data;
      })
    }
    else {
      this.explorerservice.getProductosByNameProd(texto).subscribe((result:any)=>{
        console.log(result.data);
        this.tps = result.data;
      })
    }
  }
  busquedaNomCat(): void {
    this.tps = [];
    var texto: String = this.busquedaForm.get('texto')?.value;
    if (texto == ''){
      this.explorerservice.getTps().subscribe((result:any)=>{
        console.log(result.data);
        this.tps = result.data;
      })
    }
    else {
      this.explorerservice.getProductosByCat(texto).subscribe((result:any)=>{
        console.log(result.data);
        this.tps = result.data;
      })
    }
  }
  busquedaNomTienda(): void {
    this.tps = [];
    var texto: String = this.busquedaForm.get('texto')?.value;
    if (texto == ''){
      this.explorerservice.getTps().subscribe((result:any)=>{
        console.log(result.data);
        this.tps = result.data;
      })
    }
    else {
      this.explorerservice.getProductosByNameTienda(texto).subscribe((result:any)=>{
        console.log(result.data);
        this.tps = result.data;
      })
    }
  }
}
