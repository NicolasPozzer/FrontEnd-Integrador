import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skill3soft } from '../components/model/skill3soft';

@Injectable({
  providedIn: 'root'
})
export class Skill3SoftService {
  URL = environment.URL + '/skill3';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Skill3soft[]>{
    return this.httpClient.get<Skill3soft[]>(this.URL + '/lista');
  }

  public detail(id: number): Observable<Skill3soft>{
    return this.httpClient.get<Skill3soft>(this.URL + `/detail/${id}`);
  } 

  public save(skill3soft: Skill3soft): Observable<any>{
    return this.httpClient.post<any>(this.URL + '/create', skill3soft);
  }

  public update(id: number, skill3soft: Skill3soft): Observable<any>{
    return this.httpClient.put<any>(this.URL + `/update/${id}`, skill3soft);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `/delete/${id}`);
  }
}
