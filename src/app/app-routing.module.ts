import { PersonaRegistroComponent } from './pulsacion/persona-registro/persona-registro.component';
import { PersonaConsultaComponent } from './pulsacion/persona-consulta/persona-consulta.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes =[
  {path: 'personaRegistro', component: PersonaRegistroComponent},
  {path: 'personaConsulta', component: PersonaConsultaComponent},
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
