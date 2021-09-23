import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService, private router:Router,private snackBar:MatSnackBar) { }

  ngOnInit(): void {

  }

  login(form : NgForm){

    //const email = form.value.email;
    //const password = form.value.email;
    /*this.loginService.loginins(
      form.value.email,form.value.email
    ).then(
     result=>{
       if(result){
         this.router.navigate([""]);
       }else{
         this.snackBar.open('nulo',null,{duration:4000});
       }
       console.log(result);
     });*/
     
     
    /* this.loginService.loginins(
      form.value.email,form.value.password).then(
        result=>{
          if(result){
            this.router.navigate(["carpeta-listado-personas"]);
          }else{
            this.snackBar.open('nulo',null,{duration:4000});
          }
          console.log(result);
        });*/
    
        this.loginService.loginins(form.value.email,form.value.password);
    }
    registro(){
      return this.router.navigate(['register']);
    }

    GoogleP(){
      this.loginService.googeAuth();
    }
}   
