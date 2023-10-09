import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skill2back } from '../components/model/skill2back';

@Injectable({
  providedIn: 'root'
})
export class Skill2BackService {
  URL = environment.URL + '/skill2';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Skill2back[]>{
    return this.httpClient.get<Skill2back[]>(this.URL + '/lista');
  }

  public detail(id: number): Observable<Skill2back>{
    return this.httpClient.get<Skill2back>(this.URL + `/detail/${id}`);
  } 

  public save(skill2back: Skill2back): Observable<any>{
    return this.httpClient.post<any>(this.URL + '/create', skill2back);
  }

  public update(id: number, skill2back: Skill2back): Observable<any>{
    return this.httpClient.put<any>(this.URL + `/update/${id}`, skill2back);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `/delete/${id}`);
  }
}
