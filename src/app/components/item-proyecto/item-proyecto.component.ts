import { Component, OnInit } from '@angular/core';
import { SProyectoService } from 'src/app/services/s-proyecto.service';
import { TokenService } from 'src/app/services/token.service';
import { Proyecto } from '../model/proyecto';

@Component({
  selector: 'app-item-proyecto',
  templateUrl: './item-proyecto.component.html',
  styleUrls: ['./item-proyecto.component.css']
})
export class ItemProyectoComponent implements OnInit{
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
}


