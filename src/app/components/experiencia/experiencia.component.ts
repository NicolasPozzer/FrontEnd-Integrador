import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencia: any[]; // se inicializa la variable

  constructor(private personaService: PersonaService) {
    this.experiencia = [];
  }

  ngOnInit(): void {
    /*
    this.personaService.getDatos().subscribe(datos => {
      this.experiencia = datos.experiencia;
    });*/
  }
}