import { Component, OnInit } from '@angular/core';
import { Interprete } from 'src/app/model/interprete';
import { InterpreteService } from 'src/app/services/interprete.service';

@Component({
  selector: 'app-listado-interpretes',
  templateUrl: './listado-interpretes.component.html',
  styleUrls: ['./listado-interpretes.component.css']
})
export class ListadoInterpretesComponent implements OnInit {

  interpretes: Interprete[] = undefined;

  constructor(private interpreteService: InterpreteService) { }

  ngOnInit(){
    this.interpreteService.getAll().subscribe(data => {
      this.interpretes = data;
    });
  }
}
