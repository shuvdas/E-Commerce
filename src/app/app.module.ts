import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopsComponent } from '../Shops/Shops.component';
import { HomeComponent } from '../Home/Home.component';
import { SignUpComponent } from '../SignUp/SignUp.component';
import { LoginComponent } from '../Login/Login.component';

import  { DataService } from '../data.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { SearchBarComponent } from '../searchbar/searchbar.component';
import { DialogbodyComponent } from '../dialogbody/dialogbody.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogsuccessComponent } from '../dialogsuccess/dialogsuccess.component';

@NgModule({
  declarations: [							
      AppComponent,
      ShopsComponent,
      HomeComponent,
      SearchBarComponent,
      DialogbodyComponent,
      SignUpComponent,
      LoginComponent,
      DialogsuccessComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule, MatInputModule, MatAutocompleteModule, MatChipsModule, MatFormFieldModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [ DataService,
    {
      provide: MatDialogRef,
      useValue: {}
    },
    {
      provide: MAT_DIALOG_DATA,
      useValue: {}
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
