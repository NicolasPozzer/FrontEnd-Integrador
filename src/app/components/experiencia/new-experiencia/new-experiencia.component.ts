import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SExperienciaService } from 'src/app/services/s-experiencia.service';
import { Experiencia } from '../../model/experiencia';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent {
  nombreE: string = '';
  iniciO: string = '';
  fiN: string = '';
  marcA: string = '';
  descripcionE: string = '';

  constructor(private sExperiencia: SExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Experiencia(this.nombreE, this.iniciO, this.fiN, this.marcA, this.descripcionE);
    this.sExperiencia.save(expe).subscribe(
      data => {
        alert("Experiencia añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Error Falló agregar al Agregar Experiencia");
        this.router.navigate(['']);
      }
    )
  }

}

