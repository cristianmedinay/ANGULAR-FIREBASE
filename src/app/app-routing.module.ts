import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarpetaListadoPersonasComponent } from './carpeta-listado-personas/carpeta-listado-personas.component';
import { FormularioComponent } from './carpeta-listado-personas/formulario/formulario.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path:'',component:CarpetaListadoPersonasComponent},
  {path:'carpeta-listado-personas',component:CarpetaListadoPersonasComponent,children:[
  {path:'agregar',component:FormularioComponent},
  {path:':id',component:FormularioComponent},  
  ]},
  {path:'**',component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
