import { EventEmitter, Injectable, Output } from "@angular/core";
import { DataServices } from "./data.services";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonasServicio{

    //personas: Persona[]=[new Persona('cristian','Medina'),new Persona('brenda','Medina')];
    personas: Persona[]=[];
    emitirsaludo = new EventEmitter<Number>();

    constructor(private logginService:LoggingService, private dataServices:DataServices){

    }


    setPersonas(persona : Persona[]){
      this.personas = persona;
    }

    //FIREBASE
    obtenerPersonas(){
      return this.dataServices.cargarPersonas();
    }



    personaAgregada(persona:Persona){
        this.logginService.enviarMensajeAConsola('agregamos a '+persona.nombre+' '+persona.apellido);
        if(this.personas==null){
          this.personas=[];
        }
        this.personas.push(persona);
        this.dataServices.guardarPersonas(this.personas);
      }
      
    indicePersona(indexx:number){
      let perso : Persona = this.personas[indexx];
      return perso;
    }
    modificarPersona(indexx: number, perso :Persona){
      let persona1 :Persona= this.personas[indexx];
      persona1.nombre = perso.nombre;
      persona1.apellido = perso.apellido;
    }
    deletePersona(index: number){

      this.personas.splice(index,1); 

    }
}