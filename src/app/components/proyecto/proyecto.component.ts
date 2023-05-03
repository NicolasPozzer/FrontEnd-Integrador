import { Component, OnInit } from '@angular/core';
import { SProyectoService } from 'src/app/services/s-proyecto.service';
import { TokenService } from 'src/app/services/token.service';
import { Proyecto } from '../model/proyecto';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  pro: Proyecto[] = [];

  constructor(private sProyecto: SProyectoService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyecto(): void {
    this.sProyecto.lista().subscribe(data => { this.pro = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.sProyecto.delete(id).subscribe(
        data => {
          this.cargarProyecto();
        }, err => {
          alert("No se pudo borrar el Proyecto");
        }
      )
    }
  }
}