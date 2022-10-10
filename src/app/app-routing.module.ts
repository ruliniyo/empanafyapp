import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListadoCompositoresComponent } from './components/listado-compositores/listado-compositores.component';
import { ListadoGenerosComponent } from './components/listado-generos/listado-generos.component';
import { ListadoInterpretesComponent } from './components/listado-interpretes/listado-interpretes.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"listado-generos", component: ListadoGenerosComponent},
  {path:"listado-compositores", component: ListadoCompositoresComponent},
  {path:"listado-interpretes", component: ListadoInterpretesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
