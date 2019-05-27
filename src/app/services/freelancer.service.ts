import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FreelancerService {

  constructor(private http:HttpClient) { }
  personalApi="";
  freelancerToken = JSON.parse(localStorage.getItem("currentUser"));
  personalInfo(){
  return  this.http.get(this.personalApi)
  }
  deleteProject(){
    return this.http.delete(this.personalApi)
  }
}
