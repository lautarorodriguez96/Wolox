import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ValidadoresService } from '../../services/validadores.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  formu: FormGroup;
  public pais;
  public provincia;


  paisSeleccionado: string = '0';
  verSeleccion: string = '';

  provinciaSeleccionada: string = '0';  
  verProvinciaSeleccion: string = '';


  paises: { id: number; name: string; }[];
  argentina: { id: number; name: string; }[];
  brasil: { id: number; name: string; }[];
  colombia: { id: number; name: string; }[];
  mexico: { id: number; name: string; }[];
  ecuador: { id: number; name: string; }[];




  constructor(private fb: FormBuilder,
    private validadores: ValidadoresService) {
    this.crearFormulario();
    this.cargarData();
    this.obtenerStorage();

    this.paises = [
      { id: 1, name: 'Argentina' },
      { id: 2, name: 'Brasil' },
      { id: 3, name: 'Colombia' },
      { id: 4, name: 'México' },
      { id: 5, name: 'Ecuador' }
    ];

    this.argentina = [
      { id: 1, name: 'Buenos Aires' },
      { id: 2, name: 'Cordoba' },
      { id: 3, name: 'Mendoza' },
      { id: 4, name: 'Jujuy' },
      { id: 5, name: 'Santa Cruz' }
    ]

    this.brasil = [
      { id: 1, name: 'Rio de Janeiro' },
      { id: 2, name: 'Brasilia' },
      { id: 3, name: 'Porto Alegre' },
      { id: 4, name: 'Sao Paulo' },
      { id: 5, name: 'Salavador de Bahia' }
    ]

    this.colombia = [
      { id: 1, name: 'Cali' },
      { id: 2, name: 'Bogotá' },
      { id: 3, name: 'Barranquilla' },
      { id: 4, name: 'Medellín' },
      { id: 5, name: 'Cartagena de Indias' }
    ]

    this.mexico = [
      { id: 1, name: 'Tijuana' },
      { id: 2, name: 'Guadalajara' },
      { id: 3, name: 'Puebla' },
      { id: 4, name: 'León' },
      { id: 5, name: 'Monterrey' }
    ]

    this.ecuador = [
      { id: 1, name: 'Quito' },
      { id: 2, name: 'Guayaquil' },
      { id: 3, name: 'Cuenca' },
      { id: 4, name: 'Santo Domingo' },
      { id: 5, name: 'Durán' }
    ]
  }

  ngOnInit(): void {
  }


  get nombreNoValido() {
    return this.formu.get('nombre').invalid && this.formu.get('nombre').touched
  }

  get apellidoNoValido() {
    return this.formu.get('apellido').invalid && this.formu.get('apellido').touched
  }

  get paisNoValido() {
    return this.formu.get('pais').invalid && this.formu.get('pais').touched
  }

  get provinciaNoValido() {
    return this.formu.get('provincia').invalid && this.formu.get('provincia').touched
  }

  get emailNoValido() {
    return this.formu.get('email').invalid && this.formu.get('email').touched
  }

  get telefonoNoValido() {
    return this.formu.get('telefono').invalid && this.formu.get('telefono').touched
  }

  get contraseniaNoValido() {
    return this.formu.get('contrasenia').invalid && this.formu.get('contrasenia').touched
  }

  get contrasenia2NoValido() {
    const contra1 = this.formu.get('contrasenia').value;
    const contra2 = this.formu.get('contrasenia2').value;
    return (contra1 === contra2) ? false : true;
  }

  get resultados() {
    return this.formu.get('resultados') as FormArray;
  }

  capturarPais() {
    this.verSeleccion = this.paisSeleccionado;
    switch (this.verSeleccion) {
      case '1':
          this.provincia = this.argentina; 
        break;
      case '2':
          this.provincia = this.brasil; 
        break;
      case '3':
        this.provincia = this.colombia; 
        break;
      case '4':
        this.provincia = this.mexico; 
        break;
      case '5':
        this.provincia = this.ecuador; 
        break;
      default: '0'
        break;
    }
  }

  capturarProvincia() {
    this.verProvinciaSeleccion = this.provinciaSeleccionada;
  }

  crearFormulario() {
    this.formu = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(30)]],
      apellido: ['', [Validators.required, Validators.maxLength(30)]],
      pais: ['', Validators.required] ,
      provincia: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      telefono: ['', [Validators.required, Validators.pattern("[0-9 ]{10}")]],
      contrasenia: ['', [Validators.required, Validators.minLength(6)]],
      contrasenia2: ['', [Validators.required, Validators.minLength(6)]]
    }, {
      validators: this.validadores.passwordIguales('contrasenia', 'contrasenia2')
    });
  }

  cargarData() {
    this.formu.reset({
      nombre: '',
      apellido: '',
      pais: '',
      provincia: '',
      email: '',
      telefono: '',
      contrasenia: ''
    });
  }

  guardar() {
    if (this.formu.invalid) {
      return Object.values(this.formu.controls).forEach(control => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach(control => control.markAsTouched());
        } else {
          control.markAsTouched();
        }
      });
    }
    localStorage.setItem("formulario", JSON.stringify(this.formu.value));

    this.formu.reset({
      nombre: '',
      apellido: '',
      pais: '',
      provincia: '',
      email: '',
      telefono: '',
      contrasenia: ''
    });

  }

  obtenerStorage() {
    let formulario = JSON.parse(localStorage.getItem("formulario"));
    if (formulario != null) {
      window.location.href = "/list";
    }
  }

}