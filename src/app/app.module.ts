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
import { EditCarousel1Component } from './components/buttons/edit-carousel1/edit-carousel1.component';
import { EditNameCarouselComponent } from './components/buttons/edit-name-carousel/edit-name-carousel.component';
import { EditCarousel2Component } from './components/buttons/edit-carousel2/edit-carousel2.component';
import { Carousel2Component } from './components/modals/carousel2/carousel2.component';
import { EditCarousel3Component } from './components/buttons/edit-carousel3/edit-carousel3.component';
import { Carousel3Component } from './components/modals/carousel3/carousel3.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { FotoPerfilComponent } from './components/foto-perfil/foto-perfil.component';
import { EditFotoPerfilComponent } from './components/buttons/edit-foto-perfil/edit-foto-perfil.component';
import { ModalFotoPerfilComponent } from './components/modals/modal-foto-perfil/modal-foto-perfil.component';
import { TrashAboutmeComponent } from './components/buttons/trash-aboutme/trash-aboutme.component';
import { ModalTrashAboutmeComponent } from './components/modals/modal-trash-aboutme/modal-trash-aboutme.component';
import { ErrorComponent } from './components/error/error.component';
import { SkillsComponent } from './components/skills/skills.component';
import { Skill1Component } from './components/skills/skill1/skill1.component';
import { Skill2Component } from './components/skills/skill2/skill2.component';
import { Skill3Component } from './components/skills/skill3/skill3.component';
import { ItemExpeduComponent } from './components/item-expedu/item-expedu.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { interceptorProvider } from './services/interceptor-service';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia/edit-experiencia.component';
import { EditAboutmeComponent } from './components/aboutme/edit-aboutme/edit-aboutme.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RedesComponent,
    CarouselComponent,
    Carousel1Component,
    EditCarousel1Component,
    EditNameCarouselComponent,
    EditCarousel2Component,
    Carousel2Component,
    EditCarousel3Component,
    Carousel3Component,
    AboutmeComponent,
    FotoPerfilComponent,
    EditFotoPerfilComponent,
    ModalFotoPerfilComponent,
    TrashAboutmeComponent,
    ModalTrashAboutmeComponent,
    ErrorComponent,
    SkillsComponent,
    Skill1Component,
    Skill2Component,
    Skill3Component,
    ItemExpeduComponent,
    EducacionComponent,
    ExperienciaComponent,
    ProyectosComponent,
    HomeComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    EditAboutmeComponent
 
 
    
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
