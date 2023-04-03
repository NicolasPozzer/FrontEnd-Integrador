import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './modals/login/login.component';
import { RedesComponent } from './redes/redes.component';
import { CarouselComponent } from './carousel/carousel.component';
import { Carousel1Component } from './modals/carousel1/carousel1.component';
import { EditCarousel1Component } from './buttons/edit-carousel1/edit-carousel1.component';
import { EditNameCarouselComponent } from './buttons/edit-name-carousel/edit-name-carousel.component';
import { NameCarouselComponent } from './modals/name-carousel/name-carousel.component';
import { EditCarousel2Component } from './buttons/edit-carousel2/edit-carousel2.component';
import { Carousel2Component } from './modals/carousel2/carousel2.component';
import { EditCarousel3Component } from './buttons/edit-carousel3/edit-carousel3.component';
import { Carousel3Component } from './modals/carousel3/carousel3.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { FotoPerfilComponent } from './foto-perfil/foto-perfil.component';
import { EditFotoPerfilComponent } from './buttons/edit-foto-perfil/edit-foto-perfil.component';
import { ModalFotoPerfilComponent } from './modals/modal-foto-perfil/modal-foto-perfil.component';
import { EditAboutmeComponent } from './buttons/edit-aboutme/edit-aboutme.component';
import { TrashAboutmeComponent } from './buttons/trash-aboutme/trash-aboutme.component';
import { ModalEditAboutmeComponent } from './modals/modal-edit-aboutme/modal-edit-aboutme.component';
import { ModalTrashAboutmeComponent } from './modals/modal-trash-aboutme/modal-trash-aboutme.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { LogoutComponent } from './modals/logout/logout.component';
import { RedesAdminComponent } from './redes-admin/redes-admin.component';
import { ErrorComponent } from './error/error.component';



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


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
