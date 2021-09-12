import { Component } from "@angular/core";

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css']
    /*template: `<h1>Listado de Personas</h1>
    <app-persona></app-persona>`*/
})

export class PersonasComponent {


    deshabilitar = false;
    mensaje = '';
    titulo = 'cristian';
    puno: string='';
    pdos: string='';
    resultado: number=0;
    mostrar = false;
    evento(){
      this.mostrar=true;
       this.mensaje ='persona agregada';
        
    }

    //event binding
    modificarTitulo(event: Event){
        this.titulo=(<HTMLInputElement>event.target).value;
    }


    /*resultadoSuma(uno: string, dos: string){
        if(uno==''){
            return uno;
        }else if(dos==''){
            return dos;
        }else{
            return parseInt(uno) + parseInt(dos);
        }
           
        }*/
     sumar():void{
          this.resultado = parseInt(this.puno) + parseInt(this.pdos);
     }
}


