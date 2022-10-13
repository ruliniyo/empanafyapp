import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Compositor } from '../model/compositor';

@Injectable({
  providedIn: 'root'
})
export class CompositorService {

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get<Compositor[]>("http://localhost:8080/compositores");
  }

  getByCodigo(codigo:number){
    return this.httpClient.get<Compositor>("http://localhost:8080/compositores/" + codigo);
  }

}
