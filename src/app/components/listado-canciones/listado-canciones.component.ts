import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cancion } from 'src/app/model/cancion';
import { CancionService } from 'src/app/services/cancion.service';

@Component({
  selector: 'app-listado-canciones',
  templateUrl: './listado-canciones.component.html',
  styleUrls: ['./listado-canciones.component.css']
})
// TODO 5
export class ListadoCancionesComponent implements OnInit {

  canciones:Cancion[] = undefined;

  constructor(private cancionService: CancionService,
              private router: Router) { }

  ngOnInit() {

    this.cancionService.getAll().subscribe(data => {
      this.canciones = data;
    });

  }

  verFicha(ismn:string){
    this.router.navigate(['ficha-cancion', ismn]); // el array indica a dónde vamos y qué parámetros enviamos
  }

}
