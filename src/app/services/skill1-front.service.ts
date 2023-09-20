import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skill1front } from '../components/model/skill1front';

@Injectable({
  providedIn: 'root'
})
export class Skill1FrontService {
  URL = environment.URL + 'skill/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Skill1front[]>{
    return this.httpClient.get<Skill1front[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Skill1front>{
    return this.httpClient.get<Skill1front>(this.URL + `detail/${id}`);
  } 

  public save(skill1front: Skill1front): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'https://backend-login-yq7o.onrender.com/create', skill1front);
  }

  public update(id: number, skill1front: Skill1front): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, skill1front);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
