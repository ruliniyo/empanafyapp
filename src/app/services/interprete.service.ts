import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Interprete } from '../model/interprete';

@Injectable({
  providedIn: 'root'
})
export class InterpreteService {

  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get<Interprete[]>("http://localhost:8080/interpretes");
  }
}
