import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms'

import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { FormularioComponent } from './components/formulario/formulario.component';

//services
import {WoloxServices } from './services/wolox.services'

//router
import { APP_ROUTING } from './app.routes'

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    FormularioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,    
    APP_ROUTING,
    ReactiveFormsModule
  ],
  providers: [
    WoloxServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
