import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { WoloxServices } from 'src/app/services/wolox.services';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {

  techs: any [] = [];

  displayedColumns: string[] = ['tech', 'anio', 'autor', 'licencia', 'lenguaje', 'type', 'logo', 'favoritos'];
  dataSource = new MatTableDataSource<EstructureElement>(ELEMENT_DATA);
  @ViewChild(MatSort) sort: MatSort;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toUpperCase();
  }

  constructor( private _woloxServices: WoloxServices) { 
    /*this._woloxServices.getListTechs().subscribe( (rta:any) => {
      this.techs = rta
      
    });*/
    
    this._woloxServices.getListTechs().subscribe((rta:any) => {  
      this.techs = rta
      this.dataSource = new MatTableDataSource(this.techs);
      this.dataSource.sort = this.sort;
      console.log('aca rta', rta);
      //this.dataSource.paginator = this.paginator;
      //this.paginator._intl.itemsPerPageLabel = 'Resultados por página'; 
    });  
    
  }

  ngOnInit(): void {
  }

}

export interface EstructureElement {
  tecnologia: string;
  anio: string;
  author: string;
  licencia: string;
  lenguaje: string;
  favoritos: string;
}
const ELEMENT_DATA: EstructureElement[] = [];