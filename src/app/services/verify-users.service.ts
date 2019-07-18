import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvironmentUrlService } from './environment-url.service';

@Injectable({
  providedIn: 'root'
})
export class VerifyUsersService {
  baseIp: any;
  users:any;
  getunverfied(){
    this.getUnverifiedUser().subscribe(data=>{
      this.users = data;
      console.log(this.users)
    })
  }
  constructor(private http:HttpClient,private environmentser:EnvironmentUrlService) {

    this.baseIp = this.environmentser.baseIp;

   }
   adminToken = JSON.parse(localStorage.getItem("currentUser")).token;

  getSSN(id)
  {
    const headers = new HttpHeaders({
      "Authorization" :"Bearer " + this.adminToken,
      "Content-Type" : "application/json"
    });
   return this.http.get(`${this.baseIp}/Admin/GetSSNPhoto/${id}`,);
  }

  getUnverifiedUser(){
    const headers = new HttpHeaders({
      "Authorization" :"Bearer " + this.adminToken,
      "Content-Type" : "application/json"
    });
    return this.http.get(`${this.baseIp}/Admin/GetUnVerifiedUsers`,{"headers":headers})

  }
  ValidateUser(Id){
    const headers = new HttpHeaders({
      "Authorization" :"Bearer " + this.adminToken,
      "Content-Type" : "application/json"
    });
    return this.http.put(`${this.baseIp}/Admin/ValidateUser/${Id}?flag=true`,{},{"headers":headers})

  }
  DeclineUser(Id){
     const headers = new HttpHeaders({
      "Authorization" :"Bearer " + this.adminToken,
      "Content-Type" : "application/json"
    });
    return this.http.put(`${this.baseIp}/Admin/ValidateUser/${Id}?flag=false`,{},{"headers":headers})

  }
}
