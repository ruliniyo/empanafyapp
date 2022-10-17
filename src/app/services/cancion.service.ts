import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cancion }    from '../model/cancion';

const URL = environment.URLBase;

@Injectable({
  providedIn: 'root'
})
export class CancionService {
  
  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get<Cancion[]>(URL + "/canciones");
  }

  getByIsmn(ismn:string){
    return this.httpClient.get<Cancion>(URL + "/canciones/" + ismn);
  }

}