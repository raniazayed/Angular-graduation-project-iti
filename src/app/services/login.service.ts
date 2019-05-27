import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { EnvironmentUrlService } from './environment-url.service';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,envUrl: EnvironmentUrlService,private environmentser:EnvironmentUrlService) { 
    this.baseIp = this.environmentser.baseIp;
  }
  baseIp:string;
  // USER REGESTERATION
  registerApi = 'http://192.168.137.42:2090/api';
  userregister(user,flag) {
    return this.http.post(`${this.registerApi}/Users?RoleName=${flag}`, user);

  }
  // customer REGESTERATION
  customerregister(customer,CustomerId) {
    return this.http.post(`${this.registerApi}/Customers/${CustomerId}`, customer);
  }
  // freelancer REGESTERATION
  freelancerregister(freelancer,freelanceId) {
    return this.http.post(`${this.registerApi}/Freelancers/${freelanceId}`, freelancer);
  }
 

  // GET CATEGORIES 
  apidropdownUrl = 'http://192.168.137.42:2090/api';
  getcategories(){
    return this.http.get(`${this.apidropdownUrl}/Categories`).pipe(
      catchError(this.handleError)
    )
  }
  // GET SubCATEGORIES 

  getsubcategories(Id: number) {
    return this.http.get(`${this.apidropdownUrl}/Services/AllServices/${Id}`).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error:HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('An error occured:',error.error.message)
    }else{
      console.error(`Backend returned code:${error.status},`+`body was:${error.error}`);
      
    }
    return throwError('something happened')
  }
  // cheCK MAIL ALREADY EXISIST OR NOT
  checkEmailDb(email){
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.http.post(`${this.registerApi}/Users/Email`, email, {"headers": headers});
  }
  // check if role match
  roleMatch(allowedRoles): boolean {
    var isMatch = false;
    var userRoles: string[] = JSON.parse(localStorage.getItem('currentUser')).roleName;
    allowedRoles.forEach(element => {
      if (userRoles.indexOf(element) > -1) {
        isMatch = true;
        return false;
      }
    });
    return isMatch;
  
  }
}

