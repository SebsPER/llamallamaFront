import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductosComponent } from './productos/productos.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { CrudProductosComponent } from './crud-productos/crud-productos.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { AddComponent } from './dialogs/add/add.component';
import { DeleteComponent } from './dialogs/delete/delete.component';
import { EditComponent } from './dialogs/edit/edit.component';
import { AddtiendaproductoComponent } from './dialogstiendaproducto/addtiendaproducto/addtiendaproducto.component';
import { EdittiendaproductoComponent } from './dialogstiendaproducto/edittiendaproducto/edittiendaproducto.component';
import { DeletetiendaproductoComponent } from './dialogstiendaproducto/deletetiendaproducto/deletetiendaproducto.component';
import { CompracComponent } from './comprac/comprac.component';
import { CompraorderComponent } from './compraorder/compraorder.component';
import { HeaderComponent } from './header/header.component';
import { HeaderclienteComponent } from './headercliente/headercliente.component';
import { NavegaciontiendaComponent } from './navegaciontienda/navegaciontienda.component';
import { TiendaComponent } from './tienda/tienda.component';
import { LoginvComponent } from './loginv/loginv.component';
import { ClienteComponent } from './cliente/cliente.component';
import { CompraProductoComponent } from './compra-producto/compra-producto.component';
import { CarritocompradialogComponent } from './buydialogs/carritocompradialog/carritocompradialog.component';


@NgModule({
  declarations: [
    LoginComponent,
    BusquedaComponent,
    AddComponent,
    DeleteComponent,
    EditComponent,
    AddtiendaproductoComponent,
    EdittiendaproductoComponent,
    DeletetiendaproductoComponent,
    RegisterComponent,
    HeaderclienteComponent,
    HeaderComponent,
    NavegaciontiendaComponent,
    CompracComponent,
    CompraorderComponent,
    CrudProductosComponent,
    ProductosComponent,
    TiendaComponent,
    LoginvComponent,
    ClienteComponent,
    CompraProductoComponent,
    CarritocompradialogComponent
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
