import { Component, OnInit } from '@angular/core';
import { SExperienciaService } from 'src/app/services/s-experiencia.service';
import { TokenService } from 'src/app/services/token.service';
import { Experiencia } from '../model/experiencia';

@Component({
  selector: 'app-item-expedu',
  templateUrl: './item-expedu.component.html',
  styleUrls: ['./item-expedu.component.css']
})
export class ItemExpeduComponent implements OnInit{
  expe: Experiencia[] = [];

  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe(data => { this.expe = data; })
  }
}


