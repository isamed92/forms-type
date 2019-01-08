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
    mail: null
  };

  constructor() { }

  ngOnInit() {
  }

  guardar(forma: NgForm) {
    console.log('ngForm: ' , forma);
    console.log('value del form: ' , forma.value);
    console.log('usuario: ' , this.usuario);

  }

}
