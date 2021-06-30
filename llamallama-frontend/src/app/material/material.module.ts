import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule} from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from '../app-routing.module';
import { MatRadioModule} from '@angular/material/radio';
import { MatGridListModule} from '@angular/material/grid-list'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    MatIconModule,
    MatCardModule,
    MatDatepickerModule,
    MatRadioModule,
    MatOptionModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatGridListModule,
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatStepperModule,
    MatTableModule,
    MatListModule
    
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    MatIconModule,
    MatCardModule,
    MatDatepickerModule,
    MatInputModule ,
    MatRadioModule,
    MatOptionModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatGridListModule,
    CommonModule,
    MatSelectModule,
    MatDialogModule,
    MatStepperModule,
    MatNativeDateModule,
    MatTableModule,
    MatListModule
  
    
  ]
})
export class MaterialModule { }
