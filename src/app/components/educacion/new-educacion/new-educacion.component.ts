import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SEducacionService } from 'src/app/services/s-educacion.service';
import { Educacion } from '../../model/educacion';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent {
  nombreE: string = '';
  iniciO: string = '';
  fiN: string = '';
  marcA: string = '';
  descripcionE: string = '';

  constructor(private sEducacion: SEducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const edu = new Educacion(this.nombreE, this.iniciO, this.fiN, this.marcA, this.descripcionE);
    this.sEducacion.save(edu).subscribe(
      data => {
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Error Falló agregar al Agregar Experiencia Campos Incompletos!!");
        this.router.navigate(['']);
      }
    )
  }

}





