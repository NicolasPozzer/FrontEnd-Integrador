import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Skill2back } from 'src/app/components/model/skill2back';
import { Skill2BackService } from 'src/app/services/skill2-back.service';

@Component({
  selector: 'app-newskill2',
  templateUrl: './newskill2.component.html',
  styleUrls: ['./newskill2.component.css']
})
export class Newskill2Component {
  nombre: string = '';
  porcentaje: string = '';

  constructor(private sSkill2: Skill2BackService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const skill2 = new Skill2back(this.nombre, this.porcentaje);
    this.sSkill2.save(skill2).subscribe(
      data => {
        alert("Habilidad añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Error Falló agregar al Agregar Habilidad Campos Incompletos!!");
        this.router.navigate(['']);
      }
    )
  }

}


