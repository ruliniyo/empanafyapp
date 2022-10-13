import { Component }          from '@angular/core';
import { Router }             from '@angular/router';
import { Interprete }         from 'src/app/model/interprete';
import { InterpreteService }  from 'src/app/services/interprete.service';

@Component({
  selector: 'app-alta-interprete',
  templateUrl: './alta-interprete.component.html',
  styleUrls: ['./alta-interprete.component.css']
})
export class AltaInterpreteComponent {

  interprete:Interprete = new Interprete(undefined, undefined, undefined);

  constructor(private interpreteService: InterpreteService,
              private router: Router) { }

  crear(){
    this.interpreteService.crear(this.interprete).subscribe(data => {
      this.router.navigate(['listado-interpretes']);
    }); 
  }

}
