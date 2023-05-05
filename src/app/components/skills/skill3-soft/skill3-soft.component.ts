import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { Skill3soft } from '../../model/skill3soft';
import { Skill3SoftService } from 'src/app/services/skill3-soft.service';


@Component({
  selector: 'app-skill3-soft',
  templateUrl: './skill3-soft.component.html',
  styleUrls: ['./skill3-soft.component.css']
})
export class Skill3SoftComponent implements OnInit {
  skill3: Skill3soft[] = [];

  constructor(private sSkill3: Skill3SoftService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarSkill3soft();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkill3soft(): void {
    this.sSkill3.lista().subscribe(data => { this.skill3 = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.sSkill3.delete(id).subscribe(
        data => {
          this.cargarSkill3soft();
        }, err => {
          alert("No se pudo borrar la skill");
        }
      )
    }
  }
}