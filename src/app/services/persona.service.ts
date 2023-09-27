import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { persona } from '../components/model/persona.model';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  URL = environment.URL + '/personas';

  constructor(private httpClient: HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.httpClient.get<persona>(this.URL+ '/detail/1');
  }

  
  public lista(): Observable<persona[]>{
    return this.httpClient.get<persona[]>(this.URL + '/lista');
  }

  public update(id: number, persona: persona): Observable<any>{
    return this.httpClient.put<any>(this.URL + `/update/${id}`, persona);
  }

}







