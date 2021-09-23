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
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { LoginService } from './login.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment.prod';
import { LoginGuardian } from './login/login-guardian-service';
import { RegisterComponent } from './register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    PersonaComponent,
    ListadoPersonasComponent,
    HijoPersonaComponent,
    FormularioComponent,
    CarpetaListadoPersonasComponent,
    ErrorComponent,
    LoginComponent,
    RegisterComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    MatSnackBarModule
    
  ],
  providers: [LoggingService,PersonasServicio,DataServices,LoginService,LoginGuardian],
  bootstrap: [AppComponent]
})
export class AppModule { }
