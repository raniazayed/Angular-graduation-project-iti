import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements  CanActivate{
  constructor(private router : Router) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // debugger;
    var userStr = localStorage.getItem('currentUser');

    if (userStr!=null){
      var user = JSON.parse(userStr).roleName;
      if(user=="customer"){
        return true ;
      }
    else{
      this.router.navigate(['/forbidden']);

    }
  }


  }
}
