import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Interprete } from '../model/interprete';

const URL = environment.URLBase;

@Injectable({
  providedIn: 'root'
})
export class InterpreteService {

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get<Interprete[]>(URL + "/interpretes");
  }

  crear(interprete:Interprete){
    return this.httpClient.post<Interprete>(URL + "/interpretes", interprete);
  }

}
