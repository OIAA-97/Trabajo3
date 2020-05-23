import { Component, OnInit } from '@angular/core';

import { Carrera } from './carrera';

@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.component.html',
  styleUrls: ['./carrera.component.css']
})
export class CarreraComponent implements OnInit {

  carrera : any = [

    new Carrera(1, 'Tecnologias de la informacion y comunicacion')
    

  ];




  constructor() { }

  ngOnInit(): void {
  }

}
