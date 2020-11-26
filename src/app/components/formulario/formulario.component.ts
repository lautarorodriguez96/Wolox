import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})


export class FormularioComponent implements OnInit {

  formu: FormGroup;

  constructor( private fb: FormBuilder ) { 
    this.crearFormulario();
    this.cargarData();
  }

  ngOnInit(): void {    
  }

  get nombreNoValido(){
    return this.formu.get('nombre').invalid && this.formu.get('nombre').touched
  }

  get apellidoNoValido(){
    return this.formu.get('apellido').invalid && this.formu.get('apellido').touched
  }

  get emailNoValido(){
    return this.formu.get('email').invalid && this.formu.get('email').touched
  }  
  
  get telefonoNoValido(){
    return this.formu.get('telefono').invalid && this.formu.get('telefono').touched
  }  
  
  get paisNoValido(){
    return this.formu.get('pais').invalid && this.formu.get('pais').touched
  }  

  get provinciaNoValido(){
    return this.formu.get('provincia').invalid && this.formu.get('provincia').touched
  }  

  get contraseniaNoValido(){
    return this.formu.get('contrasenia').invalid && this.formu.get('contrasenia').touched
  }  

  get resultados(){
    return this.formu.get('resultados') as FormArray;
  }

  crearFormulario(){
    this.formu = this.fb.group({
      nombre:    ['', Validators.required],
      apellido: ['', Validators.required],
      email:     ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')] ],
      telefono:  ['', Validators.required, Validators.minLength[8]],
      pais:      ['', Validators.required, Validators.minLength[11]],
      provincia:  ['', Validators.required],
      contrasenia: ['', Validators.required],
    });
  }

  cargarData(){
    this.formu.reset({
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      pais: '',
      provincia: '',
      contrasenia: ''
    }); 
  }

  guardar(){
    console.log('result', this.formu)
    if (this.formu.invalid){
        return Object.values( this.formu.controls ).forEach( control => {
        if (control instanceof FormGroup){
          Object.values( control.controls ).forEach(control => control.markAsTouched() );
        }else{
          control.markAsTouched();
        }
      });
    }

    this.formu.reset({
      nombre: ''
    });
    
  }

}
