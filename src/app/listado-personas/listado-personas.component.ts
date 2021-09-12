import { Component, Input, OnInit } from '@angular/core';
import { PersonasServicio } from '../personas.service';
import { Persona } from '../persona.model';
import { Resultados } from '../resultados.model';

@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css']
})
export class ListadoPersonasComponent implements OnInit {
  
  constructor() { 
  }
  ngOnInit(): void {

  }

  /*personaAgregada(persona:Persona){
    this.personas.push(persona);
  }*/
  /*onpersonaAgregada(persona:Persona){
    this.personasServicio.personaAgregada(persona);
  }*/

  //LOCAL REFERENCE 
  /*onpersonaAgregada(persona:Persona){
    //this.personas.push(persona);
    //this.personasServicio.personaAgregada(persona);
  }*/

}
