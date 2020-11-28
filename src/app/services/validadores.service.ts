import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'

@Injectable({
  providedIn: 'root'
})

export class ValidadoresService {

  constructor() { }


  passwordIguales(contrasenia: string, contrasenia2: string) {
    return (formGroup: FormGroup)=> {
      const pass1control1 = formGroup.controls[contrasenia];
      const pass1control2 = formGroup.controls[contrasenia2];
      if ( pass1control1.value === pass1control2.value) {
        pass1control2.setErrors(null);
      }else {
        pass1control2.setErrors({noEsIgual: true});
      }
    }
  }
}
