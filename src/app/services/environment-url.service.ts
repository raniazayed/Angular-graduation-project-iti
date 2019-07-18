import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentUrlService {
  constructor() { }
  public urlAddress: string = environment.urlAddress;
  baseIp =  'http://192.168.43.180:2090/api';
}
