import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { NgSelectModule } from '@ng-select/ng-select';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { FormularioComponent } from './components/formulario/formulario.component';

//services
import { WoloxServices } from './services/wolox.services'

//router
import { APP_ROUTING } from './app.routes'

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';

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
    BrowserAnimationsModule,
    HttpClientModule,
    APP_ROUTING,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatSortModule,
    MatInputModule,
    NgSelectModule
  ],
  exports: [
    MatTableModule,
    MatFormFieldModule,
    MatSortModule,
    MatInputModule,
    NgSelectModule
  ],
  providers: [
    WoloxServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
