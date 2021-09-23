import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { LoginService } from './login.service';
import { Persona } from './persona.model';



@Injectable()
export class DataServices{

    constructor(private httpClient:HttpClient,private loginService:LoginService){

    }   


    cargarPersonas():Observable<any>{
        const token = this.loginService.getIdToken();
        return this.httpClient.get<Persona>('https://angular-29a1f-default-rtdb.europe-west1.firebasedatabase.app/datos.json?auth='+token);
    }
    
    modificarPersona(index:number,persona:Persona){
        const token = this.loginService.getIdToken();

        let url: string;
        url='https://angular-29a1f-default-rtdb.europe-west1.firebasedatabase.app/datos/'+index+'.json?auth='+token
        this.httpClient.put(url,persona).subscribe(
            response => console.log("resultado guardar personas"+response),
            error => console.log('error guardar persona'+error)
        )
    }


    //Guardar persona
    guardarPersonas(personas:Persona[]){
        const token = this.loginService.getIdToken();
        this.httpClient.put('https://angular-29a1f-default-rtdb.europe-west1.firebasedatabase.app/datos.json?auth='+token,personas)
        .subscribe(
                response => console.log("resultado guardar personas"+response),
                error => console.log('error guardar persona'+error)  
        );
    }


    eliminarPersona(index:number){

        const token = this.loginService.getIdToken();
        this.httpClient.delete('https://angular-29a1f-default-rtdb.europe-west1.firebasedatabase.app/datos/'+index+'.json?auth='+token).subscribe(
            response => console.log("resultado eliminado personas"+response),
            error => console.log('error no elimino persona'+error)  
        )
    }


   



}