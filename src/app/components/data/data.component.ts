import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent   {

  forma: FormGroup;

  usuario: object = {
    nombrecompleto: {
      nombre: 'fernando',
      apellido: 'herrera'
    },
    correo: 'isamail@mail.com',
    // pasatiempos: ['correr', 'dormir', 'comer']
  };

  constructor(

  ) {
    console.log(this.usuario);

    this.forma = new FormGroup({
      nombrecompleto: new FormGroup({
        nombre: new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
        apellido: new FormControl('', [Validators.required, this.noMedina])
      }),
      correo: new FormControl('', [Validators.required, Validators.email]),
      pasatiempos: new FormArray([
        new FormControl('Correr', [Validators.required])
      ]),
      username: new FormControl('', [Validators.required], [this.existeUsuario]),
      password1: new FormControl('', [Validators.required]),
      password2: new FormControl()

    });

    // Para cargar los datos en la forma, solo si tiene la misma estructura
    // this.forma.setValue(this.usuario);

    this.forma.controls['password2'].setValidators([
      Validators.required,
      this.noIgual.bind(this.forma)
    ]);

    // this.forma.valueChanges
    //           .subscribe(data => console.log(data));

    // this.forma.controls['username'].valueChanges
    //           .subscribe(data => console.log(data));

    this.forma.controls['username'].statusChanges
              .subscribe(data => console.log(data));


   }

   guardarCambios() {
     console.log(this.forma);
     console.log(this.forma.value);

    //  this.forma.reset({
    //     nombrecompleto: {
    //       nombre: '',
    //       apellido: ''
    //     },
    //     correo: ''
    //  });

    // this.forma.controls['correo'].setValue('da');
   }
  agregarPasatiempo() {
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('', [Validators.required])
    );
    console.log(this.forma.controls['pasatiempos']);

  }
  // Validacion personalizada
  noMedina(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'medina') {
      return {
        nomedina: true
      };
    }
    return null;
  }

  // Validacion personalizada para ver que el password 1 sea igual al password 2
  noIgual(control: FormControl): { [s: string]: boolean } {
    const forma: any = this;
    if (control.value !== forma.controls['password1'].value) {
      return {
        noiguales: true
      };
    }
    return null;
  }

  existeUsuario(control: FormControl): Promise<any> | Observable<any> {
    let promesa = new Promise(
      (res, rej) => {
        setTimeout( () => {
          if (control.value === 'usuariox') {
            res( {existe: true} );
          } else {
            res( null );
          }
        }, 3000);
      }
    );


    return promesa;
  }



}
