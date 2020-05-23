import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarreraComponent } from './carrera/carrera.component';
import { ProfesorComponent } from './profesor/profesor.component';

@NgModule({
  declarations: [
    AppComponent,
    CarreraComponent,
    ProfesorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
