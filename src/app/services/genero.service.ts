import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Genero } from '../model/genero';

const URL = environment.URLBase;

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  constructor(private httpCliente: HttpClient) { }

  getAll(){
    return this.httpCliente.get<Genero[]>(URL + "/generos");
  }

}
