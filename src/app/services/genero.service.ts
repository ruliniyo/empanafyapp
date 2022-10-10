import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genero } from '../model/genero';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  constructor(private httpCliente: HttpClient) { }

  getAll(){
    return this.httpCliente.get<Genero[]>("http://localhost:8080/generos");
  }

}
