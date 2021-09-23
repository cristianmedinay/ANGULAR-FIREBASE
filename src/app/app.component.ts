import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { LoginService } from './login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private loginService : LoginService){

  }

  ngOnInit(): void {
    
  }

  isAutentificado(){
    return this.loginService.isAutenticado();
  }

  salir(){
    return this.loginService.logOut();
  }

}

/*
import { FormBuilder, FormGroup, FormControl, Validators  } from '@angular/forms';

  miFormulario: FormGroup;

  constructor(private formBuilder:FormBuilder){
    this.miFormulario= new FormGroup({
      nombre: new FormControl('', [Validators.required]),Validators.requiredTrue
      apellido: new FormControl('', [Validators.required,Validators.minLength(6)]),
    });
  }

  ngOnInit(): void {
   
  }

  send(){
    console.log(this.miFormulario.value);
  }
---------------------------------------------
userContact: FormGroup | any;

get contacArray():FormArray{
    return this.userContact?.get('Contacts') as FormArray ;
  }

 ngOnInit() {
  this.generarUser();
  }

  public generarUser():void{
    this.userContact = new FormGroup({
      Contacts: new FormArray([
        UsuariosComponent.addUserContactItem(),
      ])
    });
  }
 public addContacto(){
     // this.userContact.get('Contacts').push(new FormControl());
      this.contacArray.push(UsuariosComponent.addUserContactItem());
    }
  datosform(){
    console.log(this.userContact.value);
  }
------------------------------------------
  @Input()
  formChild= new FormGroup({});


    static addUserContactItem():FormGroup {
     return new FormGroup({
      nombre: new FormControl(''),
      apellido : new FormControl('')
  
    });
 }
*/
