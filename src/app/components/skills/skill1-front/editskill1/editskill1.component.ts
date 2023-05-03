import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill1front } from 'src/app/components/model/skill1front';
import { Skill1FrontService } from 'src/app/services/skill1-front.service';

@Component({
  selector: 'app-editskill1',
  templateUrl: './editskill1.component.html',
  styleUrls: ['./editskill1.component.css']
})

export class Editskill1Component implements OnInit {
  skill1: Skill1front = null;

  constructor(private sSkill1: Skill1FrontService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sSkill1.detail(id).subscribe(
      data =>{
        this.skill1 = data;
      }, err =>{
        alert("Error al modificar Habilidad");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sSkill1.update(id, this.skill1).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar Habilidad");
         this.router.navigate(['']);
      }
    )
  }

}