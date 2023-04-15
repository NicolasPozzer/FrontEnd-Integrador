import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-foto-perfil',
  templateUrl: './foto-perfil.component.html',
  styleUrls: ['./foto-perfil.component.css']
})
export class FotoPerfilComponent implements OnInit{

  imagenPerfil: any;

  constructor(
    private personaService: PersonaService
  ){}


  ngOnInit(): void {
    
    this.personaService.getDatos().subscribe( datos =>{
      this.imagenPerfil = datos.imagenPerfil
    })

  }
}