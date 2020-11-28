import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
export class WoloxServices{

    paises: { id: number; name: string; }[];

    //private wolox:Wolox[] = [];    

    constructor(private _http: HttpClient){  }


    getListTechs() {
        return this._http.get('http://private-8e8921-woloxfrontendinverview.apiary-mock.com/techs');
    }

    /*getLogin() {
      return this._http.post('http://private-8e8921-woloxfrontendinverview.apiary-mock.com/login');
    }

    getSignUp() {
      return this._http.post('http://private-8e8921-woloxfrontendinverview.apiary-mock.com/signup');
    }*/
}


/*export interface Wolox {
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    cuit: string;
    horario: string;
    estacionamiento: string;
};*/