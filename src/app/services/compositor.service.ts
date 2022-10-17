import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Compositor } from '../model/compositor';

const URL = environment.URLBase;

@Injectable({
  providedIn: 'root'
})
export class CompositorService {

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get<Compositor[]>(URL + "/compositores");
  }

  getByCodigo(codigo:number){
    return this.httpClient.get<Compositor>(URL + "/compositores/" + codigo);
  }

}
