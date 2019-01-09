import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent   {

  forma: FormGroup;

  usuario: object = {
    nombreCompleto: {
      nombre: 'fernando',
      apellido: 'herrera'
    },
    correo: 'isamail@mail.com'
  };

  constructor(

  ) {
    console.log(this.usuario);

    this.forma = new FormGroup({
      'nombrecompleto': new FormGroup({
        'nombre': new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
        'apellido': new FormControl('', Validators.required)
      }),
      'correo': new FormControl('', [Validators.required, Validators.email])
    });


   }

   guardarCambios() {
     console.log(this.forma);
   }



}
