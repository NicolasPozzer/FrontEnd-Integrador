import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia/edit-experiencia.component';
import { EditAboutmeComponent } from './components/aboutme/edit-aboutme/edit-aboutme.component';
import { EditProyectoComponent } from './components/proyecto/edit-proyecto/edit-proyecto.component';
import { Editskill1Component } from './components/skills/skill1-front/editskill1/editskill1.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion/edit-educacion.component';


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'editexp/:id', component:EditExperienciaComponent},
  {path: 'educacion/:id', component:EditEducacionComponent},
  {path: 'editacercade/1', component:EditAboutmeComponent},
  {path: 'editproject/:id', component:EditProyectoComponent},
  {path: 'editskill1/:id', component:Editskill1Component},
  {path: 'editskill2/:id', component:Editskill2Component},
  {path: 'editskill3/:id', component:Editskill3Component},
  {path: '**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
