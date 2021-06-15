import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompracComponent } from './components/comprac/comprac.component';
import { CrudProductosComponent } from './components/crud-productos/crud-productos.component';
import { LoginComponent } from './components/login/login.component';
import { NavegaciontiendaComponent } from './components/navegaciontienda/navegaciontienda.component';
import { ProductosComponent } from './components/productos/productos.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'tiendas', component: NavegaciontiendaComponent},
  {path: 'compra/:id', component:CompracComponent},
  {path: 'crud-productos', component: CrudProductosComponent},
  {path: 'productos', component: ProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
