import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductosComponent } from './productos/productos.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { CrudProductosComponent } from './crud-productos/crud-productos.component';
import { BusquedaComponent } from './busqueda/busqueda.component';


@NgModule({
  declarations: [
    LoginComponent,
    BusquedaComponent

  ],
  imports:[
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    LoginComponent,
    MaterialModule
  ] 
})
export class ComponentModule { }
