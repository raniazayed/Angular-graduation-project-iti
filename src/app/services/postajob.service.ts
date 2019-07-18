import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { EnvironmentUrlService } from './environment-url.service';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class PostajobService {
  baseIp: any;

  constructor(private http: HttpClient, private environmentser:EnvironmentUrlService) {
    this.baseIp = this.environmentser.baseIp;
  }

  CustomerToken = JSON.parse(localStorage.getItem("currentUser")).token;

  // GET CATEGORIES 
  getcategories() {
    return this.http.get(`${this.baseIp}/Categories`).pipe(
      catchError(this.handleError)
    )
  }
  // GET SubCATEGORIES 

  getsubcategories(Id: number) {
    return this.http.get(`${this.baseIp}/Services/AllServices/${Id}`).pipe(
      catchError(this.handleError)
    );
  }
  // SEND POSTAJOB FORM TO BACKEND
  send(formValue) {

    console.log(this.CustomerToken);
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + this.CustomerToken,
      "Content-Type": "application/json"
    });
    return this.http.post(`${this.baseIp}/CustomerFreelancer`, formValue,{"headers":headers}).pipe(
      catchError(this.handleError)
    );
  }

  // GET FREELANCERS
  getFreelancers(Id) {
    return this.http.get(`${this.baseIp}/freelancers/all/${Id}`)

  }
  // GET ALL DATA
  getData(Id) {
    return this.http.get<Category>(`${this.baseIp}/Services/postjobService/${Id}`)
  }
  getDataFreelancer(Id) {
    return this.http.get(`${this.baseIp}/Customers/postjob/${Id}`)
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occured:', error.error.message)
    } else {
      console.error(`Backend returned code:${error.status},` + `body was:${error.error}`);
    }
    return throwError('something happened')
  }
}
