import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentUrlService } from './environment-url.service';

@Injectable({
  providedIn: 'root'
})
export class UploadfilesService {
  baseIp: string;

  constructor(private http:HttpClient,private environmentser:EnvironmentUrlService) { 
    this.baseIp = this.environmentser.baseIp;

  }
  // uploadApi = "";
  uploadWorks(form){
    return this.http.post(`${this.baseIp}`,form)
  }
}
