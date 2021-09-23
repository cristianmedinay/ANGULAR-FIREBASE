import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServices } from 'src/app/data.services';
import { LoggingService } from '../../LoggingService.service';
import { Persona } from '../../persona.model';
import { PersonasServicio } from '../../personas.service';
import { Resultados } from '../../resultados.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  @Output() personacreada = new EventEmitter<Persona>();
  nombreInput:string='';
  apellidoInput: string='';


  @Output() resultado= new EventEmitter<number>();
  num1:string='0';
  num2:string='0';
  res:number=0;
  index:number=0;
  edicion:number=0;
  @ViewChild('apellidoRef') apellidoRef: ElementRef;
  @ViewChild('nombreRef') nombreRef: ElementRef;

  constructor(private logginService:LoggingService,private personaServicio:PersonasServicio,
    private router:Router,private route:ActivatedRoute, private servicioP:DataServices) {

        this.personaServicio.emitirsaludo.subscribe(
            (indice:number)=>
              alert('suscrito numero'+indice)
            
        )

   }

  ngOnInit(){
    this.index = this.route.snapshot.params['id'];
    this.edicion = +this.route.snapshot.queryParams['modoEdicion'];
    if(this.edicion !=null && this.edicion===1){
     let persona: Persona =  this.personaServicio.indicePersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }

  /*agregarPersona(){
    let persona1 = new Persona(this.nombreInput,this.apellidoInput);
    //this.personas.push(persona1);
    this.personacreada.emit(persona1);
  }*/

    
    //LOCAL REFERENCE
    /*agregarPersona(nombre:HTMLInputElement,apellido:HTMLInputElement){
        let perso = new Persona(nombre.value,apellido.value);
        this.personaServicio.personaAgregada(perso);
        //this.personacreada.emit(perso);
    }*/
    //LOCAL REFERENCE & VIEW CHILD
    /*agregarPersona(){
      let perso = new Persona(this.nombreRef.nativeElement.value,this.apellidoRef.nativeElement.value);
      this.personaServicio.personaAgregada(perso);
      //this.personacreada.emit(perso);
    }*/
    
    //Two 
    agregarPersona(){
      let perso = new Persona(this.nombreInput,this.apellidoInput);

      if(this.edicion !=null && this.edicion===1){
        this.personaServicio.modificarPersona(this.index,perso);
        //this.servicioP.modificarPersona(this.index,perso);
      }else{
        this.personaServicio.personaAgregada(perso);
      }
      this.router.navigate(['carpeta-listado-personas']);
      //this.personacreada.emit(perso);
    }

    eliminarPersona(){
      if(this.index !=null){
        this.personaServicio.deletePersona(this.index);
      }
      this.router.navigate(['carpeta-listado-personas']);
    }

    /*agregarPersona(){
    let persona1 = new Persona(this.nombreRef.nativeElement.value,this.apellidoRef.nativeElement.value);
    //this.personas.push(persona1);
    //this.logginService.enviarMensajeAConsola("enviado"+persona1);
    //this.personacreada.emit(persona1);
    this.personaServicio.personaAgregada(persona1);
    }*/

    agregarResultado(){
      let res=parseInt(this.num1)+parseInt(this.num2);
      this.resultado.emit(res);
    }

  

}
