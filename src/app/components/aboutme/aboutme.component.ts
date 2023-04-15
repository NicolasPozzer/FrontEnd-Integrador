import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';


@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {



  aboutMe: string = '';

  constructor(
    private personaService: PersonaService
  ) { }

  ngOnInit(): void {

    this.personaService.getDatos().subscribe(datos => {
      this.aboutMe = datos.aboutMe;
    });
    
  }

}
