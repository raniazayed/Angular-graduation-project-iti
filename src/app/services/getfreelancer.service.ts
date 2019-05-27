import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetfreelancerService {

  constructor(private http :HttpClient) { }
  getfreelancerApi = 'http://192.168.137.42:2090' ;
  getfreelancer(id){
    return this.http.get(`${this.getfreelancerApi}/api/freelancers/${id}`)
  }
  // DeleteProject(projId){
  //   return this.http.delete(`${this.getfreelancerApi}/api/freelancers/`,projId)
  // }
}
