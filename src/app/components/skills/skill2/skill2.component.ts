import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-skill2',
  templateUrl: './skill2.component.html',
  styleUrls: ['./skill2.component.css']
})
export class Skill2Component implements OnInit {

  skills2: any[]; // se inicializa la variable
  nomHabilidad: string = '';
  progreso: number = 0;

  constructor(private personaService: PersonaService) {
    this.skills2 = [];
  }

  ngOnInit(): void {
    this.personaService.getDatos().subscribe(datos => {
      this.skills2 = datos.skills2;
    });
  }
}
