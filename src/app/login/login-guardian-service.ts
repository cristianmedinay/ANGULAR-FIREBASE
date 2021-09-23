import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "../login.service";


@Injectable()
export class LoginGuardian implements CanActivate{

    constructor(private loginSerive:LoginService, private router: Router){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        if(this.loginSerive.isAutenticado()){
            return true;
        }else{
            this.router.navigate(['login']);
            return false;
        }


    }
    
}