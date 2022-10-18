import { Component, OnInit }  from '@angular/core';
import { Genero }             from 'src/app/model/genero';
import { GeneroService }      from 'src/app/services/genero.service';

@Component({
  selector: 'app-listado-generos',
  templateUrl: './listado-generos.component.html',
  styleUrls: ['./listado-generos.component.css']
})
export class ListadoGenerosComponent implements OnInit {

  generos:Genero[] = undefined;         // esto es el dataSource
  columnasAPintar:string[] = undefined; // el array de las columnas que se van a mostrar

  constructor(private generoService: GeneroService) { }

  ngOnInit() {

    this.columnasAPintar = ['col_1','col_2','col_3','col_4'];

    let observable = this.generoService.getAll();
    
    observable.subscribe(datos => {
      this.generos = datos;
    });
  }

  mostrarFila(genero:Genero){
    console.log(genero);
  }

}
