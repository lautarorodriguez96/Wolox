import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { WoloxServices } from 'src/app/services/wolox.services';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  techs: any [] = [];

  displayedColumns: string[] = ['tech', 'anio', 'autor', 'licencia', 'lenguaje', 'type', 'logo', 'favoritos'];
  dataSource = new MatTableDataSource<EstructureElement>(ELEMENT_DATA);
  @ViewChild(MatSort) sort: MatSort;
  totalTechs: any;
  favorite: any [];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toUpperCase();
  }

  constructor( private _woloxServices: WoloxServices) {     
    this._woloxServices.getListTechs().subscribe((rta:any) => {  
      this.techs = rta;
      this.dataSource = new MatTableDataSource(this.techs);
      this.dataSource.sort = this.sort;
      this.totalTechs = rta.length;      
      console.log('aca rta', rta);
    });  
    
  }

  ngOnInit(): void {
  }

  favourite(element){
    this.favorite = element.tech;
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