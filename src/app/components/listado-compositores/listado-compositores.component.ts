import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Compositor } from 'src/app/model/compositor';
import { CompositorService } from 'src/app/services/compositor.service';

@Component({
  selector: 'app-listado-compositores',
  templateUrl: './listado-compositores.component.html',
  styleUrls: ['./listado-compositores.component.css']
})
export class ListadoCompositoresComponent implements OnInit {

  compositores: Compositor[] = undefined;

  constructor(private compositorService: CompositorService,
              private router: Router) { }

  ngOnInit(){
    this.compositorService.getAll().subscribe(data => {
      this.compositores = data;
    });
  }

  verFicha(codigo:number){
    this.router.navigate(['ficha-compositor', codigo]);
  }

}
