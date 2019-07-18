import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentUrlService } from './environment-url.service';

@Injectable({
  providedIn: 'root'
})
export class GetfreelancerService {
  baseIp: any;

  constructor(private http :HttpClient,private environmentser:EnvironmentUrlService) { 
    this.baseIp = this.environmentser.baseIp;

  }
  freelancerToken = JSON.parse(localStorage.getItem("currentUser")).token;

  // getfreelancerApi = 'http://192.168.137.192/api' ;
  getfreelancer(id){
    const headers = new HttpHeaders({
      "Authorization" :"Bearer " + this.freelancerToken,
      "Content-Type" : "application/json"
    });
    console.log(this.freelancerToken)
    return this.http.get(`${this.baseIp}/api/freelancers/${id}`,{"headers":headers})
  }
  // DeleteProject(projId){
  //   return this.http.delete(`${this.getfreelancerApi}/api/freelancers/`,projId)
  // }
}
