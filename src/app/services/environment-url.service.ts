import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentUrlService {
  
  public urlAddress: string = environment.urlAddress;
  baseIp =  'http://192.168.137.42:2090/api';
  constructor() { }
}
