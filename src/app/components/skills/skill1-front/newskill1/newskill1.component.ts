import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Skill1front } from 'src/app/components/model/skill1front';
import { Skill1FrontService } from 'src/app/services/skill1-front.service';

@Component({
  selector: 'app-newskill1',
  templateUrl: './newskill1.component.html',
  styleUrls: ['./newskill1.component.css']
})
export class Newskill1Component {
  nombre: string = '';
  porcentaje: string = '';

  constructor(private sSkill1: Skill1FrontService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const skill1 = new Skill1front(this.nombre, this.porcentaje);
    this.sSkill1.save(skill1).subscribe(
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

