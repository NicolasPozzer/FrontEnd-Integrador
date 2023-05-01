import { Component, OnInit } from '@angular/core';
import { persona } from '../model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  persona: persona = new persona("","","","","");

constructor(
    private personaService: PersonaService, private tokenService: TokenService) { }

    isLogged = false;
  
    ngOnInit(): void {
      this.personaService.getPersona().subscribe(data => {this.persona = data})
      if (this.tokenService.getToken()) {
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
  

  }
}
