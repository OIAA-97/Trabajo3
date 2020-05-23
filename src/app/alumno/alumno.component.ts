import { Component, OnInit } from '@angular/core';

import { Alumno } from './alumno';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  alumno : any = [

    new Alumno(1, 'Omar Ivan Acuña Ascencio', 1117250036)

  ];


  constructor() { }

  ngOnInit(): void {
  }

}
