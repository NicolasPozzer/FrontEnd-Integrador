import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SProyectoService } from 'src/app/services/s-proyecto.service';
import { Proyecto } from '../../model/proyecto';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent {
  nombreE: string = '';
  descripcionE: string = '';
  urldemO: string = '';

  constructor(private sProyecto: SProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const pro = new Proyecto(this.nombreE, this.descripcionE, this.urldemO);
    this.sProyecto.save(pro).subscribe(
      data => {
        alert("Proyecto añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Error Falló agregar al Agregar Proyecto");
        this.router.navigate(['']);
      }
    )
  }

}

