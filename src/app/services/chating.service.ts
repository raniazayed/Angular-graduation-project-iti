import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import{Message} from '../interfaces/message';
import{Id} from '../interfaces/id'
import { EnvironmentUrlService } from './environment-url.service';

@Injectable({
  providedIn: 'root'
})
export class ChatingService {
   HttpUploadOptions = {
    headers: new HttpHeaders({ "Accept": "application/json"  })
  }
// baseurl:string="http://192.168.43.17:8090/api/UserMessages"
  baseIp: string;
  constructor(private http:HttpClient,private environmentser:EnvironmentUrlService) { 
    this.baseIp = this.environmentser.baseIp;

  }
  getAll(id )
  {
    return this.http.post<Message[]>(`${this.baseIp}/UserMessages`,id,this.HttpUploadOptions);
  }
}
