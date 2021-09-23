export class Persona{
    forEach(arg0: (dataServices: any) => void) {
      throw new Error('Method not implemented.');
    }
    
    
    /*nombre: string="";
    apellido: string="";

    constructor(nombre : string, apellido : string){    
        this.nombre=nombre;
        this.apellido=apellido;
    }*/

    constructor(public nombre:string, public apellido:string){
        
    }

}