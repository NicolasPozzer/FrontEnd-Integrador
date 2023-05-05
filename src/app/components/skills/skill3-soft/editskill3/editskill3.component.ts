import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill3soft } from 'src/app/components/model/skill3soft';
import { Skill3SoftService } from 'src/app/services/skill3-soft.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-editskill3',
  templateUrl: './editskill3.component.html',
  styleUrls: ['./editskill3.component.css']
})

export class Editskill3Component  implements OnInit {
  skill3: Skill3soft = null;

  constructor(private sSkill3: Skill3SoftService, private activatedRouter: ActivatedRoute,
    private router: Router,private tokenService: TokenService) { }

    isLogged = false;
  
    ngOnInit(): void {
      if (this.tokenService.getToken()) {
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
    const id = this.activatedRouter.snapshot.params['id'];
    this.sSkill3.detail(id).subscribe(
      data =>{
        this.skill3 = data;
      }, err =>{
        alert("Error al modificar Habilidad");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sSkill3.update(id, this.skill3).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar Habilidad");
         this.router.navigate(['']);
      }
    )
  }

}