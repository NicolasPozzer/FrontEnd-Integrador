import { Injectable } from '@angular/core';
//1_Esto es para suscribirse y que se recibe respuesta de forma asincronica(osea que no cambia todo el tiempo)
import { Observable } from 'rxjs';
//2_Esto es para poder hacer peticiones
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})



export class PersonaService {




  //3_Este primer HTTP se llama Alias
  constructor(private http:HttpClient) { }


  //4_Metosdo observable que devuelve los datos
  getDatos(): Observable<any> {
    //5_Se llama al JSON con su path -ruta-, o bien, en su lugar se puede poner una URL de un JSON que este Online, en este caso usamos local.
    return this.http.get('../assets/json/datos.json');
  }

}
