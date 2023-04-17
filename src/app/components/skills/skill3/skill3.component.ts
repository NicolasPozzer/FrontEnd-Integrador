import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-skill3',
  templateUrl: './skill3.component.html',
  styleUrls: ['./skill3.component.css']
})
export class Skill3Component implements OnInit {

  skills3: any[]; // se inicializa la variable
  nomHabilidad: string = '';
  progreso: number = 0;

  constructor(private personaService: PersonaService) {
    this.skills3 = [];
  }

  ngOnInit(): void {
    this.personaService.getDatos().subscribe(datos => {
      this.skills3 = datos.skills3;
    });
  }
}
