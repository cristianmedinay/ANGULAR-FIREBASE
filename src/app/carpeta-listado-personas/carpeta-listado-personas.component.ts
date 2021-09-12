import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServices } from '../data.services';
import { Persona } from '../persona.model';
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

  resultado:number=0;
  constructor(private router:Router,  private personasServicio:PersonasServicio,
     private dataServices:DataServices) { }

  ngOnInit():void {
    //this.personas = this.personasServicio.personas;
    this.dataServices.cargarPersonas()
    .subscribe(
      (personas: Persona[]) => {
      //this.personas=personas;
      //this.personasServicio.setPersonas(personas);
      
      //console.log(personas);
        personas.forEach(personas => {
          console.log(personas.nombre);
          //this.personas=personas;
          //this.personasServicio.setPersonas(personas);
        });
      }
    );
  }


  /*agregarDatos(){
    this.dataServices.cargarPersonas()
    .subscribe(
      (personas: Persona[]) => {
      this.personas=personas;
      this.personasServicio.setPersonas(personas);
      console.log(personas);
      }
    );
  }*/

  agregarResultado(resu:number){
    this.result = resu;
  }

  agregar(){
      this.router.navigate(['carpeta-listado-personas/agregar']);
  }

}
