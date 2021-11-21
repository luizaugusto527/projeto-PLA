import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Resposta } from './resposta';

@Injectable({
  providedIn: 'root'
})
export class SolverService {
  constructor(private httpClient:HttpClient) { 
    
  }
  
  setSolver(x:FormGroup):Observable<Resposta>{
  const port:number = 50040
  const y = JSON.stringify(x)
  const url = `http://localhost:${port}/solver/${y}`
    return this.httpClient.get<Resposta>(url)
  }
}
