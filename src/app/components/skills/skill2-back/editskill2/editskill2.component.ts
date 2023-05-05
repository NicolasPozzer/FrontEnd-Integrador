import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill2back } from 'src/app/components/model/skill2back';
import { Skill2BackService } from 'src/app/services/skill2-back.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-editskill2',
  templateUrl: './editskill2.component.html',
  styleUrls: ['./editskill2.component.css']
})

export class Editskill2Component implements OnInit {
  skill2: Skill2back = null;

  constructor(private sSkill2: Skill2BackService, private activatedRouter: ActivatedRoute,
    private router: Router,private tokenService: TokenService) { }

    isLogged = false;
  
    ngOnInit(): void {
      if (this.tokenService.getToken()) {
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
    const id = this.activatedRouter.snapshot.params['id'];
    this.sSkill2.detail(id).subscribe(
      data =>{
        this.skill2 = data;
      }, err =>{
        alert("Error al modificar Habilidad");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sSkill2.update(id, this.skill2).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar Habilidad");
         this.router.navigate(['']);
      }
    )
  }

}