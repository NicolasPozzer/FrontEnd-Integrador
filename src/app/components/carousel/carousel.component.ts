//6_ Agregamos el OnInit
import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { persona } from '../model/persona.model';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})


export class CarouselComponent implements OnInit {
  persona: persona = new persona("", "", "", "","");

  constructor(
    private personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => { this.persona = data })
  }

}
