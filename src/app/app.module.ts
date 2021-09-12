import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { PersonaComponent } from './persona/persona.component';
import { FormsModule } from '@angular/forms';
import { ListadoPersonasComponent } from './listado-personas/listado-personas.component';
import { HijoPersonaComponent } from './carpeta-listado-personas/hijo-persona/hijo-persona.component';
import { FormularioComponent } from './carpeta-listado-personas/formulario/formulario.component';
import { LoggingService } from './LoggingService.service';
import { PersonasServicio } from './personas.service';
import { CarpetaListadoPersonasComponent } from './carpeta-listado-personas/carpeta-listado-personas.component';
import { ErrorComponent } from './error/error.component';
import { DataServices } from './data.services';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    PersonaComponent,
    ListadoPersonasComponent,
    HijoPersonaComponent,
    FormularioComponent,
    CarpetaListadoPersonasComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoggingService,PersonasServicio,DataServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
