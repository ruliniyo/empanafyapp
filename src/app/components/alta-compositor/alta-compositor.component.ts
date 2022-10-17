import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Compositor } from 'src/app/model/compositor';
import { CompositorService } from 'src/app/services/compositor.service';

@Component({
  selector: 'app-alta-compositor',
  templateUrl: './alta-compositor.component.html',
  styleUrls: ['./alta-compositor.component.css']
})
export class AltaCompositorComponent implements OnInit{

  formulario:FormGroup;

  constructor(private compositorService: CompositorService,
              private formBuilder: FormBuilder,
              private router: Router) { }
  
  ngOnInit() {

    this.formulario = this.formBuilder.group({
      codigo: new FormControl('',[Validators.required]),
      nombre: new FormControl('',[Validators.required]),
      apellidos: new FormControl('',[Validators.required]),
      nacionalidad: new FormControl('',),
      fechaNacimiento: new FormControl('',),
      fechaDefuncion: new FormControl('',)
    });
  }

  crear(){

    let compositor:Compositor = new Compositor();

    compositor.codigo = this.formulario.controls['codigo'].value;
    compositor.nombre = this.formulario.controls['nombre'].value;
    compositor.apellidos = this.formulario.controls['apellidos'].value;
    compositor.nacionalidad = this.formulario.controls['nacionalidad'].value;
    compositor.fechaNacimiento = this.formulario.controls['fechaNacimiento'].value;
    compositor.fechaDefuncion =  this.formulario.controls['fechaDefuncion'].value;

    this.compositorService.crear(compositor).subscribe(
      data => {
        this.router.navigate(['listado-compositores']);
      }
    );
   
  }

}
