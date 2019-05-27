import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RatedprojectsService {

  constructor(private http :HttpClient) { }
  ratedprojectsApi='http://192.168.137.42:2090/api';
  // HIGH RATED PROJECTS
  getratedprojects(){
  return  this.http.get(`${this.ratedprojectsApi}/customerfreelancer/highrank`)
  }
 
  getAllCategories(){
    return this.http.get(`${this.ratedprojectsApi}/categories`)
  }
  // GET FREELANCERS OF SUBCATEGORIES
  getfreelancers(id){
    return this.http.get(`${this.ratedprojectsApi}/all/${id}`)
  }
}
