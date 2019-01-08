import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent   {

  forma: FormGroup;

  constructor(

  ) {
    this.forma = new FormGroup({
      'nombre': new FormControl('', [
                                      Validators.required,
                                      Validators.minLength(3)
                                    ]),
      'apellido': new FormControl('', Validators.required),
      'correo': new FormControl('', [Validators.required, Validators.email])
    });
   }

   guardarCambios() {
     console.log(this.forma);
   }



}
