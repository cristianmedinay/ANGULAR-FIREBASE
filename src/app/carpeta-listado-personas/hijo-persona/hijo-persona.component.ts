import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../../persona.model';
import { PersonasServicio } from '../../personas.service';
import { Resultados } from '../../resultados.model';

@Component({
  selector: 'app-hijo-persona',
  templateUrl: './hijo-persona.component.html',
  styleUrls: ['./hijo-persona.component.css']
})
export class HijoPersonaComponent implements OnInit {

  @Input() persona: Persona;
  @Input() indice: number;
  //@Input() resultad: Resultados;
  @Input() resultad: number;
  
  constructor(private personaServicio:PersonasServicio) { }

  ngOnInit(): void {
  }

  emitirsaludo(){
    this.personaServicio.emitirsaludo.emit(this.indice);
  }
  

}
