import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Compositor } from 'src/app/model/compositor';
import { CompositorService } from 'src/app/services/compositor.service';

@Component({
  selector: 'app-ficha-compositor',
  templateUrl: './ficha-compositor.component.html',
  styleUrls: ['./ficha-compositor.component.css']
})
export class FichaCompositorComponent implements OnInit {

  compositor:Compositor = undefined;

  constructor(private compositorService:CompositorService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(){

    this.activatedRoute.params.subscribe(params => {

      let codigo = params['codigo'];

      this.compositorService.getByCodigo(codigo).subscribe(data => {
        this.compositor = data;
      });

    });

  }

}
