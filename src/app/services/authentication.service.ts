import { Currentuser } from './../interfaces/currentuser';
import { JwtHelperService } from '@auth0/angular-jwt';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EnvironmentUrlService } from './environment-url.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
private currentUserSubject :BehaviorSubject<any>;
private currentUser:Observable<any>;
baseIp:string;
private loginStatus :  BehaviorSubject<any>;

constructor(private http:HttpClient,private environmentser:EnvironmentUrlService,private router: Router) { 
  this.baseIp = this.environmentser.baseIp;
  console.log(this.baseIp)
  this.currentUserSubject = new BehaviorSubject<boolean>(JSON.parse(localStorage.getItem('currentUser')));
  this.currentUser = this.currentUserSubject.asObservable();
  // debugger;
  this.loginStatus = new BehaviorSubject<boolean>(this.checkLoginStatus());
  
}
// private loginStatus = new BehaviorSubject<boolean>(this.checkLoginStatus());
// private loginStatus =new BehaviorSubject<boolean>(JSON.parse(localStorage.getItem('currentUser')));

checkLoginStatus():boolean{
  // debugger;
  // const user = localStorage.getItem('currentUser');
  // if(user){
  //   if(JSON.parse(user).roleName="customer")
  //   return true;
  // }
  // // if(user != null){
  // // }
  // else{
  //   return false;
  // }
  const user = localStorage.getItem('currentUser');
  if(user != null){
    return true;
  }else{
    return false;
  }
  
}
get isLoggedIn(){
  // debugger;
  return  this.checkLoginStatus();
}


getRole(){
  const user:any = localStorage.getItem('currentUser');
  if(user){

    if(JSON.parse(user).roleName != null){
      return JSON.parse(user).roleName;
    }
  }
}

// loginApi = 'http://192.168.137.1:2090/api';
  token:string;
  // user:{token:string,roleName:string};
  user:Currentuser
  public get currentUserValue(): any {
    return this.currentUserSubject.value;
}
// USER LOGIN
  login(email: string, password: string){
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.http.post(`${this.baseIp}/users/login`, { email, password }, {"headers": headers})
    .pipe(map(user => {
      // login successful if there's a jwt token in the response
      // if (user && user.token) {
        // console.log(user)
        // console.log(user.token)
        console.log(user)
        // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
      // }

      return user;
  }));

  }
  // USER LOGOUT
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    // this.router.navigate(['home'])
    // this.loginStatus.next(null);
  
}
  
}
