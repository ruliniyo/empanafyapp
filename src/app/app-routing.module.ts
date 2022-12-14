import { NgModule }                       from '@angular/core';
import { RouterModule, Routes }           from '@angular/router';
import { AltaCompositorComponent }        from './components/alta-compositor/alta-compositor.component';
import { AltaGeneroComponent }            from './components/alta-genero/alta-genero.component';
import { AltaInterpreteComponent }        from './components/alta-interprete/alta-interprete.component';
import { FichaCancionComponent }          from './components/ficha-cancion/ficha-cancion.component';
import { FichaCompositorComponent }       from './components/ficha-compositor/ficha-compositor.component';
import { HomeComponent }                  from './components/home/home.component';
import { ListadoCancionesComponent }      from './components/listado-canciones/listado-canciones.component';
import { ListadoCompositoresComponent }   from './components/listado-compositores/listado-compositores.component';
import { ListadoGenerosComponent }        from './components/listado-generos/listado-generos.component';
import { ListadoInterpretesComponent }    from './components/listado-interpretes/listado-interpretes.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"listado-generos", component: ListadoGenerosComponent},
  {path:"alta-genero", component: AltaGeneroComponent},
  {path:"listado-compositores", component: ListadoCompositoresComponent},
  {path:"listado-interpretes", component: ListadoInterpretesComponent},
  {path:"listado-canciones", component: ListadoCancionesComponent},
  {path:"alta-interprete", component: AltaInterpreteComponent},
  {path:"alta-compositor", component: AltaCompositorComponent},
  {path:"ficha-cancion/:ismn", component: FichaCancionComponent},
  {path:"ficha-compositor/:codigo", component: FichaCompositorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
