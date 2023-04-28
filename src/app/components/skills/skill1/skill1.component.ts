import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-skill1',
  templateUrl: './skill1.component.html',
  styleUrls: ['./skill1.component.css']
})
export class Skill1Component implements OnInit {

  skills1: any[]; // se inicializa la variable
  nomHabilidad: string = '';
  progreso: number = 0;

  constructor(private personaService: PersonaService) {
    this.skills1 = [];
  }

  ngOnInit(): void {
    /*
    this.personaService.getDatos().subscribe(datos => {
      this.skills1 = datos.skills1;
    });*/
  }
}
