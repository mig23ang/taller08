import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarroAdminComponent } from './components/carro-admin/carro-admin.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { PropietarioAdminComponent } from './components/propietario-admin/propietario-admin.component';
import { PropietrarioCarroComponent } from './components/propietrario-carro/propietrario-carro.component';

const routes: Routes = [
  /**rutas generales**/
  { path: 'inicio', component:InicioComponent },
  { path: 'principal', component:PrincipalComponent },
  { path: 'carro', component:CarroAdminComponent },
  { path: 'propietario', component:PropietarioAdminComponent },
  { path: 'propietarioCarro', component:PropietrarioCarroComponent },
/**son obligatorios para el router**/
  { path: '', redirectTo:'inicio',pathMatch:'full' },
  { path: '**', component:NoEncontradoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
