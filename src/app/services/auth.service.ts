import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NuevoUsuario } from '../components/model/nuevo-usuario';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../components/model/login-usuario';
import { JwtDto } from '../components/model/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL = environment.URL + '/auth';


  constructor(private httpClient: HttpClient) { }

 public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
   return this.httpClient.post<any>(this.URL + '/nuevo', nuevoUsuario);
 }

 public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
   return this.httpClient.post<JwtDto>(this.URL + '/login', loginUsuario)
 }
}