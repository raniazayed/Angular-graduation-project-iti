import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentUrlService } from './environment-url.service';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  baseIp: string;

  // baseurl= "https://localhost:2090/api"
  constructor(private http:HttpClient,private environmentser:EnvironmentUrlService) {
    this.baseIp = this.environmentser.baseIp;
                
   }
   adminToken = JSON.parse(localStorage.getItem("currentUser")).token;

   getStatistics(){
    const headers = new HttpHeaders({
      "Authorization" :"Bearer " + this.adminToken,
      "Content-Type" : "application/json"
    });
    return this.http.get(`${this.baseIp}/Admin`, {"headers":headers});
   }
   getRecentUsers()
   {
    const headers = new HttpHeaders({
      "Authorization" :"Bearer " + this.adminToken,
      "Content-Type" : "application/json"
    });
    return this.http.get(`${this.baseIp}/Admin/GetRecentRegisteredUsers`,{"headers":headers});
   }
}
