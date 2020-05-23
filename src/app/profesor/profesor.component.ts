import { Component, OnInit } from '@angular/core';

import { Profesor } from './profesor'

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {


  profesor : any = [

    new Profesor(1, 'Alfonso Barajas'),
    new Profesor(2, 'Ivonne Siqueiros'),
    new Profesor(3, 'Silvia Benitez'),
    new Profesor(4, 'Alejandro Enriquez')
    

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
