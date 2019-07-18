import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentUrlService } from './environment-url.service';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  baseIp: string;

  constructor(private http : HttpClient,private environmentser:EnvironmentUrlService) { 
    this.baseIp = this.environmentser.baseIp;

  }
  freelancerToken = JSON.parse(localStorage.getItem("token")).token;

  // taskApi = "http://192.168.43.180:2090/api";
  getTask(){
    const headers = new HttpHeaders({
      "Authorization" :"Bearer " + this.freelancerToken,
      "Content-Type" : "application/json"
    });
    return this.http.get<Task>(`${this.baseIp}/ServiceTask/GenerateTask`,{"headers":headers})
  }
  sendReply(data){
    const headers = new HttpHeaders({
      "Authorization" :"Bearer " + this.freelancerToken,
      "Content-Type" : "application/json"
    });
    return this.http.post(`${this.baseIp}/ServiceTaskAnswer/SumbitTaskAnswer`,data,{"headers":headers});
  }
}
