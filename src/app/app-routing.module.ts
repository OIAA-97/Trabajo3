import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CarreraComponent } from './carrera/carrera.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { MateriasComponent }  from './materias/materias.component';

//Arreglo de las rutas
const routes: Routes = [


  { path: 'carrera', component: CarreraComponent },
  { path: 'profesor', component: ProfesorComponent },
  { path: 'materias', component: MateriasComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
