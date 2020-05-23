import { Component, OnInit } from '@angular/core';

import { Materia } from './materia'

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {

  materia : any = [

    new Materia(1, 'Desarrollo De Aplicacion III'),
    new Materia(2, 'Integradora II'),
    new Materia(3, 'Administracion de proyecto'),
    new Materia(4, 'Ingles V')
    

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
