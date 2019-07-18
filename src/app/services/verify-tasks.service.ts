import { Injectable } from '@angular/core';
import { EnvironmentUrlService } from './environment-url.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VerifyTasksService {
  baseIp: any;
  tasks:any;
  constructor(private environmentser:EnvironmentUrlService,private http:HttpClient) { 
    this.baseIp = this.environmentser.baseIp;

  }
  adminToken = JSON.parse(localStorage.getItem("currentUser")).token;

  getunverfied(){
    const headers = new HttpHeaders({
      "Authorization" :"Bearer " + this.adminToken,
      "Content-Type" : "application/json"
    });
    this.getUnVerifiedTasks().subscribe(data=>{
      this.tasks = data;
      console.log(this.tasks)
    })
  }
    getUnVerifiedTasks()
   {
    const headers = new HttpHeaders({
      "Authorization" :"Bearer " + this.adminToken,
      "Content-Type" : "application/json"
    });
     return this.http.get(`${this.baseIp}/Admin/GetUnVerifiedTasks`,{"headers":headers});
   }
   ValidateTask(Id,freelanceId){
    const headers = new HttpHeaders({
      "Authorization" :"Bearer " + this.adminToken,
      "Content-Type" : "application/json"
    });
    return this.http.put(`${this.baseIp}/Admin/VerifyTask/${Id}?flag=true`,freelanceId,{"headers":headers})

  }
  DeclineTask(Id,freelanceId){
    const headers = new HttpHeaders({
      "Authorization" :"Bearer " + this.adminToken,
      "Content-Type" : "application/json"
    });
    return this.http.put(`${this.baseIp}/Admin/VerifyTask/${Id}?flag=false`,freelanceId,{"headers":headers})

  }
}
