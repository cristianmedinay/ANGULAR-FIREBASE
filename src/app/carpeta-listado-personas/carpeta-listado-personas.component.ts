import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServices } from '../data.services';
import { Persona } from '../persona.model';
import { PersonaInterface } from '../personainterfaz.model';
import { PersonasServicio } from '../personas.service';
import { Resultados } from '../resultados.model';

@Component({
  selector: 'app-carpeta-listado-personas',
  templateUrl: './carpeta-listado-personas.component.html',
  styleUrls: ['./carpeta-listado-personas.component.css']
})
export class CarpetaListadoPersonasComponent implements OnInit {
  personas: Persona[]=[];
  i:number=0;
  titulo: string='Listado-Personas';
  titulo2: string="Aplicacion Calculadora";
  resultados : Resultados[]=[];
  result : number=0;
  personaInterfaz : PersonaInterface[]=[];
  resultado:number=0;
  constructor(private router:Router,  private personasServicio:PersonasServicio,
     private dataServices:DataServices) { }

  ngOnInit():void {
    //this.personas = this.personasServicio.personas;
    this.dataServices.cargarPersonas().subscribe(
      (persona: Persona[]) => {
            this.personas=persona;
            this.personasServicio.setPersonas(persona);
          
        });

    }
        /*(persona: PersonaInterface) => {
          let datos = Object.values(persona);
          datos.forEach((persona:PersonaInterface)=>{
            this.personas= Object.values(persona);
            this.personasServicio.setPersonas(Object.values(persona));
          });*/


          /*let datos = Object.values(persona);
          datos.forEach((persona:PersonaInterface)=>{
            this.personas= Object.values(persona);
            this.personasServicio.setPersonas(Object.values(persona));
          });*/
          
    /*this.dataServices.cargarPersonas()
    .subscribe(
      personas => {

      let datos = Object.values(personas);
        datos.forEach((persona:PersonaInterface)=>{
          this.personas= Object.values(persona);
          this.personasServicio.setPersonas(Object.values(persona));
        });
      }
    );*/
    
  

  agregarResultado(resu:number){
    this.result = resu;
  }

  agregar(){
      this.router.navigate(['carpeta-listado-personas/agregar']);
  }

}
