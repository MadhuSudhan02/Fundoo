import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthguardService } from '../services/Authguard/authguard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor (private authGuard : AuthguardService , private router : Router) {}

  canActivate() : boolean {
    if(!this.authGuard.getToken()) {
      this.router.navigateByUrl('/Login')
    }  
      return this.authGuard.getToken() ;
    

  }
  
}
