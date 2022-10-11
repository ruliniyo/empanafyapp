import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cancion } from 'src/app/model/cancion';
import { CancionService } from 'src/app/services/cancion.service';

@Component({
  selector: 'app-ficha-cancion',
  templateUrl: './ficha-cancion.component.html',
  styleUrls: ['./ficha-cancion.component.css']
})
export class FichaCancionComponent implements OnInit {

  cancion:Cancion = undefined;

  constructor(private cancionService: CancionService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(parametros =>{
      
      let ismn = parametros['ismn'];
      
      this.cancionService.getByIsmn(ismn).subscribe(data => {
        this.cancion = data;
      });

    });

  }

}
