import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { Skill2back } from '../../model/skill2back';
import { Skill2BackService } from 'src/app/services/skill2-back.service';

@Component({
  selector: 'app-skill2-back',
  templateUrl: './skill2-back.component.html',
  styleUrls: ['./skill2-back.component.css']
})
export class Skill2BackComponent implements OnInit {
  skill2: Skill2back[] = [];

  constructor(private sSkill2: Skill2BackService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarSkill2back();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkill2back(): void {
    this.sSkill2.lista().subscribe(data => { this.skill2 = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.sSkill2.delete(id).subscribe(
        data => {
          this.cargarSkill2back();
        }, err => {
          alert("No se pudo borrar la skill");
        }
      )
    }
  }
}