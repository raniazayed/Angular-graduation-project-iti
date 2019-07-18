import { Editdata } from './../interfaces/editdata';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentUrlService } from './environment-url.service';

@Injectable({
  providedIn: 'root'
})
export class EditprofileService {
  baseIp: string;

  constructor(private http:HttpClient,private environmentser:EnvironmentUrlService) {
    this.baseIp = this.environmentser.baseIp;

   }
   freelancerToken = JSON.parse(localStorage.getItem("currentUser")).token;
   customerToken = JSON.parse(localStorage.getItem("currentUser")).token;

  // editApi = 'http://192.168.137.42:2090/api';
  // EDIT CUSTOMER PROFILE
  CustomerProfile(){
    const headers = new HttpHeaders({
      "Authorization" :"Bearer " + this.customerToken,
      "Content-Type" : "application/json"
    });
    return this.http.get<Editdata>(`${this.baseIp}/customers/GetCustomer`,{"headers":headers});
  }
  sendCustomerProfile(form){
    const headers = new HttpHeaders({
      "Authorization" :"Bearer " + this.customerToken,
      "Content-Type" : "application/json"
    });
    return this.http.put(`${this.baseIp}/customers/update`,form,{"headers":headers});
  }
   // EDIT freelancer PROFILE
   freelancerProfile(){
    const headers = new HttpHeaders({
      "Authorization" :"Bearer " + this.freelancerToken,
      "Content-Type" : "application/json"
    });
    return this.http.get<Editdata>(`${this.baseIp}/freelancers/getProfile`,{"headers":headers});
  }
  sendFreelancerProfile(form){
    const headers = new HttpHeaders({
      "Authorization" :"Bearer " + this.freelancerToken,
      "Content-Type" : "application/json"
    });
    return this.http.put(`${this.baseIp}/freelancers/Edit`,form,{"headers":headers});

  }
}
