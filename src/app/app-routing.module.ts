import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CarreraComponent } from './carrera/carrera.component';

//Arreglo de las rutas
const routes: Routes = [


  { path: 'carrera', component: CarreraComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
