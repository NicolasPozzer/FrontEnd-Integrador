import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion: any[]; // se inicializa la variable

  constructor(private personaService: PersonaService) {
    this.educacion = [];
  }

  ngOnInit(): void {
    this.personaService.getDatos().subscribe(datos => {
      this.educacion = datos.educacion;
    });
  }
}