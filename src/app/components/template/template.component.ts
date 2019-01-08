import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent implements OnInit {

  usuario: object = {
    nombre: null,
    apellido: null,
    mail: null,
    pais: null,
    sexo: null,
    acepta: null
  };

  sexos = [
    {codigo: 'H', nombre: 'Hombre'},
    {codigo: 'M', nombre: 'Mujer'},
    {codigo: 'O', nombre: 'Otro'}
  ];

  paises = [
    {
    codigo: 'CRI',
    nombre: 'Costa Rica'
  },
    {
    codigo: 'ARG',
    nombre: 'Argentina'
  },
    {
    codigo: 'ESP',
    nombre: 'España'
  },
];

  constructor() { }

  ngOnInit() {
  }

  guardar(forma: NgForm) {
    console.log('ngForm: ' , forma);
    console.log('value del form: ' , forma.value);
    console.log('usuario: ' , this.usuario);

  }

}
