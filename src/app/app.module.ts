import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { CarroAdminComponent } from './components/carro-admin/carro-admin.component';
import { PropietarioAdminComponent } from './components/propietario-admin/propietario-admin.component';
import { PropietrarioCarroComponent } from './components/propietrario-carro/propietrario-carro.component';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CabeceraComponent,
    PrincipalComponent,
    CarroAdminComponent,
    PropietarioAdminComponent,
    PropietrarioCarroComponent,
    NoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
