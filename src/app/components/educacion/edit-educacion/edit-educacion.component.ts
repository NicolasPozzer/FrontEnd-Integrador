import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SEducacionService } from 'src/app/services/s-educacion.service';
import { TokenService } from 'src/app/services/token.service';
import { Educacion } from '../../model/educacion';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})

export class EditEducacionComponent implements OnInit {
  edu: Educacion = null;

  constructor(private sEducacion: SEducacionService, private activatedRouter: ActivatedRoute,
    private router: Router,private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEducacion.detail(id).subscribe(
      data =>{
        this.edu = data;
      }, err =>{
        alert("Error al modificar Educacion");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEducacion.update(id, this.edu).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar Educacion");
         this.router.navigate(['']);
      }
    )

  }

}

