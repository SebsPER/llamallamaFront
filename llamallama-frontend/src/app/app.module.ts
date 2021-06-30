import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';
import { RegisterComponent } from './components/register/register.component'
import { HeaderclienteComponent } from './components/headercliente/headercliente.component';
import { HeaderComponent } from './components/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { NavegaciontiendaComponent } from './components/navegaciontienda/navegaciontienda.component';
import { HttpClientModule } from '@angular/common/http';
import { CompracComponent } from './components/comprac/comprac.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatInput, MatInputModule } from '@angular/material/input';
import { CompraorderComponent } from './components/compraorder/compraorder.component';
import { ProductosComponent } from './components/productos/productos.component';
import { MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { CrudProductosComponent } from './components/crud-productos/crud-productos.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ComponentModule } from './components/component.module';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ComponentModule,
    HttpClientModule
    
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
