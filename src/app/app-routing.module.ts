import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarpetaListadoPersonasComponent } from './carpeta-listado-personas/carpeta-listado-personas.component';
import { FormularioComponent } from './carpeta-listado-personas/formulario/formulario.component';
import { ErrorComponent } from './error/error.component';
import { LoginGuardian } from './login/login-guardian-service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',component:CarpetaListadoPersonasComponent, canActivate:[LoginGuardian]},
  {path:'carpeta-listado-personas',component:CarpetaListadoPersonasComponent,canActivate:[LoginGuardian]  ,children:[
  {path:'agregar',component:FormularioComponent},
  {path:':id',component:FormularioComponent},  
  ]},
  {path:'login',component:LoginComponent},  
  {path:'register',component:RegisterComponent},  
  {path:'**',component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
