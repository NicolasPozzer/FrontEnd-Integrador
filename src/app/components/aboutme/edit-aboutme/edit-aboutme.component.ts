import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from 'src/app/services/persona.service';
import { persona } from '../../model/persona.model';
import { TokenService } from 'src/app/services/token.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-aboutme',
  templateUrl: './edit-aboutme.component.html',
  styleUrls: ['./edit-aboutme.component.css']
})

export class EditAboutmeComponent implements OnInit {
  persona: persona = null;
  form: FormGroup;

  constructor(private personaService: PersonaService, private activatedRouter: ActivatedRoute,
    private router: Router,private tokenService: TokenService, private formBuilder: FormBuilder) { 
      this.form= this.formBuilder.group({
        password:['',[Validators.required, Validators.maxLength(30)]],
        email:['', [Validators.required, Validators.maxLength(460)]],
        name:['', [Validators.required]],
        uri:['', [Validators.required]],
        ape:['', [Validators.required]],
     })
    }

    

    isLogged = false;

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.getPersona().subscribe(
      data =>{
        this.persona = data;
      }, err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = 1;
    this.personaService.update(id, this.persona).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }

  get Password(){
    return this.form.get("password");
  }
 
  get Mail(){
   return this.form.get("email");
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get MailValid() {
    return false
  }

  

  get Name(){
    return this.form.get("name");
  }

  get NameValid(){
    return this.Name?.touched && !this.Name?.valid;
  }

  get Uri(){
    return this.form.get("uri");
  }

  get UriValid(){
    return this.Uri?.touched && !this.Uri?.valid;
  }

  get Ape(){
    return this.form.get("ape");
  }

  get ApeValid(){
    return this.Ape?.touched && !this.Ape?.valid;
  }


 

  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 
 
    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Enviar formuario!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }
 
  }


}