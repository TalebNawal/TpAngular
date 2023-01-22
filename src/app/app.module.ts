import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ProduitComponent } from './components/produit/produit.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { DetailComponent } from './components/detail/detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './components/signup/signup.component';
import { AuthComponent } from './components/auth/auth.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccueilComponent,
    ProduitComponent,
    DetailComponent,
    SignupComponent,
    CartComponent,
    LoginComponent,
    AuthComponent,
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
