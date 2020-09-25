import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { PersonaConsultaComponent } from './pulsacion/persona-consulta/persona-consulta.component';
import { PersonaRegistroComponent } from './pulsacion/persona-registro/persona-registro.component';
import { AppRoutingModule } from './app-routing.module';
import { PersonaService } from './services/persona.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    PersonaConsultaComponent,
    PersonaRegistroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
