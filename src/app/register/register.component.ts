import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private servicioLogin:LoginService, private router:Router) { }

  ngOnInit(): void {

  }
  
  registroValidar(ngform : NgForm){

    this.servicioLogin.registrar(ngform.value.email,ngform.value.password);
  }



}
