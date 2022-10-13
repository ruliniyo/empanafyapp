import { NgModule }                     from '@angular/core';

import { BrowserModule }                from '@angular/platform-browser';
import { HttpClientModule }             from '@angular/common/http';
import { AppRoutingModule }             from './app-routing.module';
import { FormsModule }                  from '@angular/forms';

import { AppComponent }                 from './app.component';
import { ListadoGenerosComponent }      from './components/listado-generos/listado-generos.component';
import { ListadoInterpretesComponent }  from './components/listado-interpretes/listado-interpretes.component';
import { ListadoCompositoresComponent } from './components/listado-compositores/listado-compositores.component';
import { HomeComponent }                from './components/home/home.component';
import { ListadoCancionesComponent }    from './components/listado-canciones/listado-canciones.component';
import { FichaCancionComponent }        from './components/ficha-cancion/ficha-cancion.component';
import { FichaCompositorComponent }     from './components/ficha-compositor/ficha-compositor.component';
import { AltaInterpreteComponent }      from './components/alta-interprete/alta-interprete.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoGenerosComponent,
    ListadoInterpretesComponent,
    ListadoCompositoresComponent,
    HomeComponent,
    ListadoCancionesComponent,
    FichaCancionComponent,
    FichaCompositorComponent,
    AltaInterpreteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
