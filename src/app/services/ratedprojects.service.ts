import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EnvironmentUrlService } from './environment-url.service';

@Injectable({
  providedIn: 'root'
})
export class RatedprojectsService {
  baseIp: any;

  constructor(private http :HttpClient,private environmentser: EnvironmentUrlService) { 
    this.baseIp = this.environmentser.baseIp;

  }
  // ratedprojectsApi='http://192.168.137.192/api';
  // HIGH RATED PROJECTS
  getratedprojects(){
  return  this.http.get(`${this.baseIp}/home/highrank`)
  }
 
  getAllCategories(){
    return this.http.get(`${this.baseIp}/categories`)
  }
  // GET FREELANCERS OF SUBCATEGORIES
  getfreelancers(id){
    return this.http.get(`${this.baseIp}/freelancers/all/${id}`)
  }
  getservicebyID(id)
  {
    return this.http.get(`${this.baseIp}/Services/${id}`)
  }

}
