import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree,
  } from '@angular/router';
  import { UserService } from '../services/commonSignup.service';
  import { Observable } from 'rxjs';
  import { Injectable } from '@angular/core';
  
  @Injectable({
    providedIn: 'root',
  })
  export class adminguard implements CanActivate {
    
    constructor(private userservice: UserService, private router: Router) {}
  
    canActivate(): boolean {
        if(this.userservice.isLoggedIn() && this.userservice.type.type==='admin'){
            return true
        } else if(this.userservice.isLoggedIn() && this.userservice.type.type==='user'){
            this.router.navigate(['/user'])
        } else if (this.userservice.isLoggedIn() && this.userservice.type.type==='agency'){
            this.router.navigate(['/agency'])
        } else if(!this.userservice.isLoggedIn()){
          this.router.navigate(['/authentication'])
        }
     return false
    }
  }
  