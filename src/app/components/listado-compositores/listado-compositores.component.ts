import { Component, OnInit } from '@angular/core';
import { Compositor } from 'src/app/model/compositor';
import { CompositorService } from 'src/app/services/compositor.service';

@Component({
  selector: 'app-listado-compositores',
  templateUrl: './listado-compositores.component.html',
  styleUrls: ['./listado-compositores.component.css']
})
export class ListadoCompositoresComponent implements OnInit {

  compositores: Compositor[] = undefined;

  constructor(private compositorService: CompositorService) { }

  ngOnInit(){
    this.compositorService.getAll().subscribe(data => {
      this.compositores = data;
    });
  }

}
