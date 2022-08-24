import { Component, OnInit } from '@angular/core';

export interface Personas{
  nombre:string;
  edad:number;
  carrera:string;
  hobbie:string;
}

const data:Personas[] = [
  {nombre: 'Pedro', edad: 20, carrera: 'Ingeniería', hobbie: 'futbol'},
  {nombre: 'Rodrigo', edad: 22, carrera: 'Arquitectura', hobbie: 'Bajo eléctrico'},
  {nombre: 'Romina', edad: 21, carrera: 'Abogacía', hobbie: 'Acrobacia'},
  {nombre: 'Ana', edad: 23, carrera: 'Contadora', hobbie: 'Astronomia'}
];

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'edad', 'carrera', 'hobbie'];
  dataSource = data;

  constructor() { }

  ngOnInit(): void {
  }

}
