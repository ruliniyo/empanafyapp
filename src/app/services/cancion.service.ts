import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cancion }    from '../model/cancion';

@Injectable({
  providedIn: 'root'
})
export class CancionService {
  
  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get<Cancion[]>("http://localhost:8080/canciones");
  }

  // TODO1
  getByIsmn(ismn:string){
    return this.httpClient.get<Cancion>("http://localhost:8080/canciones/" + ismn);
  }

}