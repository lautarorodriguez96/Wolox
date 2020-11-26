import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
export class WoloxServices{

    private wolox:Wolox[] = [

    ];    

    constructor(private _http: HttpClient){
    
        console.log("servicio listo");
    }

    /*getBares(){
        return this.bares;
    }

    getBar(i: string){
      return this.bares[i];
    }

    getWolox(structureDate, country) {
        http://private-8e8921-woloxfrontendinverview.apiary-mock.com/techs
        return this._http.get<any>(
          `/structure/byDate/${structureDate}/${country}`
        );
      }*/
}


export interface Wolox {
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    cuit: string;
    horario: string;
    estacionamiento: string;
};