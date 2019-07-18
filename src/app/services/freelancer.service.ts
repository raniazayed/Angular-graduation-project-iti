import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentUrlService } from './environment-url.service';

@Injectable({
  providedIn: 'root'
})
export class FreelancerService {
  baseIp: string;
  // freelancerToken:string;
  constructor(private http: HttpClient, private environmentser: EnvironmentUrlService) {
    this.baseIp = this.environmentser.baseIp;

  }
  // personalApi = 'http://192.168.137.163:2090/api';
  freelancerToken = JSON.parse(localStorage.getItem("currentUser")).token;
  // freelancerschdule page
  freelancerschdule() {
    // const headers = new Headers();
    // headers.append('Authorization', `Bearer ${this.freelancerToken}`);
    // const opts = new RequestOptions({ headers: headers });  

    const headers = new HttpHeaders({
      "Authorization" :"Bearer " + this.freelancerToken,
      "Content-Type" : "application/json"
    });
    return this.http.get(`${this.baseIp}/CustomerFreelancer/GetFreelancerAppliedRequest`,{"headers":headers})
  } 
  personalInfo() {
    // const headers = new HttpHeaders();
    // headers.set('token', this.freelancerToken);
    const headers = new HttpHeaders({
      "Authorization" :"Bearer " + this.freelancerToken,
      "Content-Type" : "application/json"
    });
    console.log(this.freelancerToken)

    return this.http.get(`${this.baseIp}/freelancers/1`,{"headers":headers})
  }
  deleteProject(id) {
    const headers = new HttpHeaders({
      "Authorization" :"Bearer " + this.freelancerToken,
      "Content-Type" : "application/json"
    });
    return this.http.delete(`${this.baseIp}/projects/${id}`)
  }

}
