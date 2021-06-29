import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductosComponent } from './productos/productos.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
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


@NgModule({
  declarations: [
    LoginComponent,
    BusquedaComponent
    AddComponent,
    DeleteComponent,
    EditComponent,
    AddtiendaproductoComponent,
    EdittiendaproductoComponent,
    DeletetiendaproductoComponent,

  ],
  imports:[
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  exports: [
    LoginComponent,
    MaterialModule
  ] 
})
export class ComponentModule { }
