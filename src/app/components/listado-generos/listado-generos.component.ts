import { Component, OnInit }  from '@angular/core';
import { Genero }             from 'src/app/model/genero';
import { GeneroService }      from 'src/app/services/genero.service';

@Component({
  selector: 'app-listado-generos',
  templateUrl: './listado-generos.component.html',
  styleUrls: ['./listado-generos.component.css']
})
export class ListadoGenerosComponent implements OnInit {

  generos:Genero[] = undefined;

  constructor(private generoService: GeneroService) { }

  ngOnInit() {
    let observable = this.generoService.getAll();
    observable.subscribe(datos => {
      this.generos = datos;
    });
  }

}
