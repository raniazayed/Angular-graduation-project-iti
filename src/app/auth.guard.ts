import { LoginService } from 'src/app/services/login.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  constructor(private authser: AuthenticationService,private router : Router,private loginser:LoginService) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
 
    if (JSON.parse(localStorage.getItem('currentUser')).token != null)
    {
      let roles = next.data["roles"] as Array<string>;
      if (roles) {
        var match = this.loginser.roleMatch(roles);
        if (match) return true;
        else {
          this.router.navigate(['/forbidden']);
          return false;
        }
      }
      else
        return true;
    }
    this.router.navigate(['/login']);
    return false;
}

  }


