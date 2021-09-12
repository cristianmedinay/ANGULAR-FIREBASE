import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Persona } from './persona.model';



@Injectable()
export class DataServices{

    constructor(private httpClient:HttpClient){

    }   


    cargarPersonas():Observable<any>{
        return this.httpClient.get('https://angular-29a1f-default-rtdb.europe-west1.firebasedatabase.app/datos.json');
    }


    //Guardar persona
    guardarPersonas(personas:Persona[]){
        
        this.httpClient.put('https://angular-29a1f-default-rtdb.europe-west1.firebasedatabase.app/datos.json',personas)
        .subscribe(
                response => console.log("resultado guardar personas"+response),
                error => console.log('error guardar persona'+error)  
        );
    }

}