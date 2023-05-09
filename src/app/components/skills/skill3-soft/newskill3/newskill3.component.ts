import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Skill3soft } from 'src/app/components/model/skill3soft';
import { Skill3SoftService } from 'src/app/services/skill3-soft.service';

@Component({
  selector: 'app-newskill3',
  templateUrl: './newskill3.component.html',
  styleUrls: ['./newskill3.component.css']
})
export class Newskill3Component {
  nombre: string = '';
  porcentaje: string = '';

  constructor(private sSkill3: Skill3SoftService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const skill3 = new Skill3soft(this.nombre, this.porcentaje);
    this.sSkill3.save(skill3).subscribe(
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

