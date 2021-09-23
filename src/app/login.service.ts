import { Injectable, NgZone } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Router } from "@angular/router";
import firebase from 'firebase/compat/app';
@Injectable({
    providedIn: 'root'
  })
export class LoginService{  

    token: string;
    
    constructor(
        public afs: AngularFirestore,   // Inject Firestore service
        public afAuth: AngularFireAuth, // Inject Firebase auth service
        public router: Router,  
        public ngZone: NgZone // NgZone service to remove outside scope warning 
        ) {
          afAuth.authState.subscribe(user=>{
            console.log(user);
            
          })
    }

    async loginins(email: string, password: string) {
      return await this.afAuth.signInWithEmailAndPassword(email, password).then(
        response=>{

          this.afAuth.currentUser.then(
            user=>{
              user.getIdToken().then(
                toke=>{
                  this.token=toke;
                  this.router.navigate(['carpeta-listado-personas']);
                }
              )
            }
          )
          /*this.auth.authState.subscribe(
            user=>{
              user.getIdToken().then( toke=>{
                this.token=toke;
                this.router.navigate(['carpeta-listado-personas']);
              })
            }
          )*/
        }
      )
      //this.router.navigate(['carpeta-listado-personas']);
      //return result;
    }

    getIdToken(){
      return this.token;
    }
    logOut(){
      return this.afAuth.signOut().then( () =>{
          this.token = null;
          this.router.navigate(['login']);
        }

      ).catch( err=>{
        console.log(err+'fallo en el logout');
      })
    }

    isAutenticado(){
      return this.token!=null;
      //return true;
    }
    registrar(email:string, password:string){
      return this.afAuth.createUserWithEmailAndPassword(email, password).then(
        result=>{
          //if(result.user.emailVerified){
            this.router.navigate(['login']);            
          //}
        }).catch(
          error=>{
            alert('este usuario ya esta registrado'+error);

        })      
    }
    AuthLogin(provider) {
      return this.afAuth.signInWithPopup(provider)
      .then((result) => {
        this.router.navigate(['carpeta-listado-personas']);
      }).catch((error) => {
          console.log(error)
      })
    }
    googeAuth(){
      /*this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider ).then(
        result=>{
          this.router.navigate(['carpeta-listado-personas']);
        }
        ).catch(
          error=>{
            alert('no se pudo iniciar sesion G+'+error);

        })*/
        //return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
        const provider = new firebase.auth.GoogleAuthProvider();
        return this.AuthLogin(provider)
          .then( response => {
         //console.log('Sucess', value);
         this.afAuth.currentUser.then(
          user=>{
            user.getIdToken().then(
              toke=>{
                this.token=toke;
                this.router.navigate(['carpeta-listado-personas']);
              }
            )
          }
        )
       })
        .catch(error => {
          console.log('Something went wrong: ', error);
        });
    }


    /*registrar(email:string, password:string){
      return this.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        if(result.user.emailVerified){
          //this.router.navigate(['carpeta-listado-personas']);
          console.log(result.user.emailVerified);
        }
        //this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
            
    }*/

    /*login(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
  }*/


    /*AuthLogin(provider) {
      return this.auth.signInWithPopup(provider)
      .then((result) => {
         this.ngZone.run(() => {
            this.router.navigate(['dashboard']);
          })
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error)
      })
    }*/
    
    

   /* login(email:string, password:string){
      return this.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.SendVerificationMail();
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
            
    }

    SendVerificationMail() {
      return this.auth.currentUser.then(u => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['email-verification']);
      })
    }  */

    SetUserData(user: any) {
      throw new Error("Method not implemented.");
    }


  

    /*SignIn(email, password) {
       this.auth.auth.signInWithEmailAndPassword(email, password)
          .then((result) => {
            this.ngZone.run(() => {
              this.router.navigate(['dashboard']);
            });
            this.SetUserData(result.user);
          }).catch((error) => {
            window.alert(error.message)
          })
      }
    SetUserData(user: any) {
        throw new Error("Method not implemented.");
    }*/
}
 