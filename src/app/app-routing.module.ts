import { NgModule }                       from '@angular/core';
import { RouterModule, Routes }           from '@angular/router';
import { FichaCancionComponent }          from './components/ficha-cancion/ficha-cancion.component';
import { HomeComponent }                  from './components/home/home.component';
import { ListadoCancionesComponent }      from './components/listado-canciones/listado-canciones.component';
import { ListadoCompositoresComponent }   from './components/listado-compositores/listado-compositores.component';
import { ListadoGenerosComponent }        from './components/listado-generos/listado-generos.component';
import { ListadoInterpretesComponent }    from './components/listado-interpretes/listado-interpretes.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"listado-generos", component: ListadoGenerosComponent},
  {path:"listado-compositores", component: ListadoCompositoresComponent},
  {path:"listado-interpretes", component: ListadoInterpretesComponent},
  {path:"listado-canciones", component: ListadoCancionesComponent},
  {path:"ficha-cancion/:ismn", component: FichaCancionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
