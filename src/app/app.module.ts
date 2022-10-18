import { NgModule }                         from '@angular/core';

import { BrowserModule }                    from '@angular/platform-browser';
import { HttpClientModule }                 from '@angular/common/http';
import { AppRoutingModule }                 from './app-routing.module';
import { AppMaterialModule }                from './app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }                     from './app.component';
import { ListadoGenerosComponent }          from './components/listado-generos/listado-generos.component';
import { ListadoInterpretesComponent }      from './components/listado-interpretes/listado-interpretes.component';
import { ListadoCompositoresComponent }     from './components/listado-compositores/listado-compositores.component';
import { HomeComponent }                    from './components/home/home.component';
import { ListadoCancionesComponent }        from './components/listado-canciones/listado-canciones.component';
import { FichaCancionComponent }            from './components/ficha-cancion/ficha-cancion.component';
import { FichaCompositorComponent }         from './components/ficha-compositor/ficha-compositor.component';
import { AltaInterpreteComponent }          from './components/alta-interprete/alta-interprete.component';
import { AltaCompositorComponent }          from './components/alta-compositor/alta-compositor.component';
import { AltaGeneroComponent }              from './components/alta-genero/alta-genero.component';
import { BrowserAnimationsModule }          from '@angular/platform-browser/animations';

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
    AltaInterpreteComponent,
    AltaCompositorComponent,
    AltaGeneroComponent
  ],
  imports: [
    AppMaterialModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
