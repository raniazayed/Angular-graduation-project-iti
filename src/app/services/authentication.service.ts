import { Currentuser } from './../interfaces/currentuser';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
private currentUserSubject :BehaviorSubject<any>;
private currentUser:Observable<any>;
loginApi = 'http://192.168.137.42:2090/api' ;
  constructor(private http:HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();

  }
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
    return this.http.post(`${this.loginApi}/users/login`, { email, password }, {"headers": headers})
    .pipe(map(user => {
      // login successful if there's a jwt token in the response
      // if (user && user.token) {
      //   // console.log(user)
      //   // console.log(user.token)
      //   // store user details and jwt token in local storage to keep user logged in between page refreshes
      //     localStorage.setItem('currentUser', JSON.stringify(user));
      //     this.currentUserSubject.next(user);
      // }

      return user;
  }));

  }
  // USER LOGOUT
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    
}
  
}
