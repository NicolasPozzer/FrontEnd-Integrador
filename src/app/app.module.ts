import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RedesComponent } from './components/redes/redes.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { Carousel1Component } from './components/modals/carousel1/carousel1.component';
import { Carousel2Component } from './components/modals/carousel2/carousel2.component';
import { Carousel3Component } from './components/modals/carousel3/carousel3.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { ModalFotoPerfilComponent } from './components/modals/modal-foto-perfil/modal-foto-perfil.component';
import { TrashAboutmeComponent } from './components/buttons/trash-aboutme/trash-aboutme.component';
import { ModalTrashAboutmeComponent } from './components/modals/modal-trash-aboutme/modal-trash-aboutme.component';
import { ErrorComponent } from './components/error/error.component';
import { SkillsComponent } from './components/skills/skills.component';
import { Skill2Component } from './components/skills/skill2/skill2.component';
import { Skill3Component } from './components/skills/skill3/skill3.component';
import { ItemExpeduComponent } from './components/item-expedu/item-expedu.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { interceptorProvider } from './services/interceptor-service';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia/edit-experiencia.component';
import { EditAboutmeComponent } from './components/aboutme/edit-aboutme/edit-aboutme.component';
import { ButtonEditAboutmeComponent } from './components/buttons/button-edit-aboutme/button-edit-aboutme.component';
import { Skill1FrontComponent } from './components/skills/skill1-front/skill1-front.component';
import { Skill2BackComponent } from './components/skills/skill2-back/skill2-back.component';
import { Skill3SoftComponent } from './components/skills/skill3-soft/skill3-soft.component';
import { Newskill1Component } from './components/skills/skill1-front/newskill1/newskill1.component';
import { ItemProyectoComponent } from './components/item-proyecto/item-proyecto.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { NewProyectoComponent } from './components/proyecto/new-proyecto/new-proyecto.component';
import { EditProyectoComponent } from './components/proyecto/edit-proyecto/edit-proyecto.component';
import { Editskill1Component } from './components/skills/skill1-front/editskill1/editskill1.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RedesComponent,
    CarouselComponent,
    Carousel1Component,
    Carousel2Component,
    Carousel3Component,
    AboutmeComponent,
    ModalFotoPerfilComponent,
    TrashAboutmeComponent,
    ModalTrashAboutmeComponent,
    ErrorComponent,
    SkillsComponent,
    Skill2Component,
    Skill3Component,
    ItemExpeduComponent,
    EducacionComponent,
    ExperienciaComponent,
    HomeComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    EditAboutmeComponent,
    ButtonEditAboutmeComponent,
    Skill1FrontComponent,
    Skill2BackComponent,
    Skill3SoftComponent,
    Newskill1Component,
    ItemProyectoComponent,
    ProyectoComponent,
    NewProyectoComponent,
    EditProyectoComponent,
    Editskill1Component
 
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
