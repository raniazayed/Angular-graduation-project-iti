import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentUrlService } from './environment-url.service';

@Injectable({
  providedIn: 'root'
})
export class ComplainsService {
  baseIp: any;

  constructor(private http:HttpClient,private environmentser:EnvironmentUrlService) {
    this.baseIp = this.environmentser.baseIp;

   }
   adminToken=JSON.parse(localStorage.getItem("currentUser")).token
  getComplains()
  {
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + this.adminToken,
      "Content-Type": "application/json"
    });
    return this.http.get(`${this.baseIp}/Admin/ServicesComplains`,{"headers":headers});
  }
  AdminChecked(id,freeID){
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + this.adminToken,
      "Content-Type": "application/json"
    });
    return this.http.put(`${this.baseIp}/Admin/AdminChecked/${id}`,freeID,{"headers":headers});

  }
}
