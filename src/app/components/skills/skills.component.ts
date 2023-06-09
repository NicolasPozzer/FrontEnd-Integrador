import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { Skill1front } from '../model/skill1front';
import { Skill1FrontService } from 'src/app/services/skill1-front.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  skill1: Skill1front[] = [];

  constructor(private sSkill1: Skill1FrontService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarSkill1front();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkill1front(): void {
    this.sSkill1.lista().subscribe(data => { this.skill1 = data; })
  }
}


