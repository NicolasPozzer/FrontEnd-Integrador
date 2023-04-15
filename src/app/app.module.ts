import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
//12_ se declara las importaciones para tomar datos
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/modals/login/login.component';
import { RedesComponent } from './components/redes/redes.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { Carousel1Component } from './components/modals/carousel1/carousel1.component';
import { EditCarousel1Component } from './components/buttons/edit-carousel1/edit-carousel1.component';
import { EditNameCarouselComponent } from './components/buttons/edit-name-carousel/edit-name-carousel.component';
import { NameCarouselComponent } from './components/modals/name-carousel/name-carousel.component';
import { EditCarousel2Component } from './components/buttons/edit-carousel2/edit-carousel2.component';
import { Carousel2Component } from './components/modals/carousel2/carousel2.component';
import { EditCarousel3Component } from './components/buttons/edit-carousel3/edit-carousel3.component';
import { Carousel3Component } from './components/modals/carousel3/carousel3.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { FotoPerfilComponent } from './components/foto-perfil/foto-perfil.component';
import { EditFotoPerfilComponent } from './components/buttons/edit-foto-perfil/edit-foto-perfil.component';
import { ModalFotoPerfilComponent } from './components/modals/modal-foto-perfil/modal-foto-perfil.component';
import { EditAboutmeComponent } from './components/buttons/edit-aboutme/edit-aboutme.component';
import { TrashAboutmeComponent } from './components/buttons/trash-aboutme/trash-aboutme.component';
import { ModalEditAboutmeComponent } from './components/modals/modal-edit-aboutme/modal-edit-aboutme.component';
import { ModalTrashAboutmeComponent } from './components/modals/modal-trash-aboutme/modal-trash-aboutme.component';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { LogoutComponent } from './components/modals/logout/logout.component';
import { RedesAdminComponent } from './components/redes-admin/redes-admin.component';
import { ErrorComponent } from './components/error/error.component';
import { SkillsComponent } from './components/skills/skills.component';
import { Skill1Component } from './components/skills/skill1/skill1.component';
import { Skill2Component } from './components/skills/skill2/skill2.component';
import { Skill3Component } from './components/skills/skill3/skill3.component';




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
    NameCarouselComponent,
    EditCarousel2Component,
    Carousel2Component,
    EditCarousel3Component,
    Carousel3Component,
    AboutmeComponent,
    FotoPerfilComponent,
    EditFotoPerfilComponent,
    ModalFotoPerfilComponent,
    EditAboutmeComponent,
    TrashAboutmeComponent,
    ModalEditAboutmeComponent,
    ModalTrashAboutmeComponent,
    UserComponent,
    AdminComponent,
    NavbarAdminComponent,
    LogoutComponent,
    RedesAdminComponent,
    ErrorComponent,
    SkillsComponent,
    Skill1Component,
    Skill2Component,
    Skill3Component
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  
  providers: [], //dentro de providers va nuestros servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
