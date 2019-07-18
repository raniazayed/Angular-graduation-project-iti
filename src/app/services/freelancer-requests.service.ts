import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { EnvironmentUrlService } from './environment-url.service';
import { ChatIds } from '../interfaces/chat-ids';

@Injectable({
  providedIn: 'root'
})
export class FreelancerRequestsService {
  baseIp: any;

  constructor(private http: HttpClient,private environmentser:EnvironmentUrlService) {
    this.baseIp = this.environmentser.baseIp;

   }
  // baseApi="http://localhost:2090/api";
  freelancerToken = JSON.parse(localStorage.getItem("currentUser")).token;

  //Freelancerpenddingreq

  Freelancerpenddingreq() {
    const headers = new HttpHeaders({
      "Authorization" :"Bearer " + this.freelancerToken,
      "Content-Type" : "application/json"
    });
    return this.http.get(`${this.baseIp}/CustomerFreelancer/GetFreelancerPendingRequest`,{"headers":headers})
  }

  //freelancercancelpendreq button

  freelancercancelpendreq(Id) {
    const headers = new HttpHeaders({
      "Authorization" :"Bearer " + this.freelancerToken,
      "Content-Type" : "application/json"
    });
    return this.http.put(`${this.baseIp}/CustomerFreelancer/CancelFreelancerRequest/${Id}`,{},{"headers":headers})
  }
   // freelancerdeclineRequest
   freelancerdeclineRequest() {
    const headers = new HttpHeaders();
    headers.set('token', this.freelancerToken);
    return this.http.get(`${this.baseIp}/Notification/FreelancerCanceledRequest`,{"headers":headers})
  }
  deleteReq(Id) {
    const headers = new HttpHeaders();
    headers.set('token', this.freelancerToken);
    return this.http.delete(`${this.baseIp}/Notification/DeleteCustomerNotification/${Id}`,{"headers":headers})
  }
  // freelancerappliedReq
  freelancerappliedReq() {
    const headers = new HttpHeaders();
    headers.set('token', this.freelancerToken);
    return this.http.get(`${this.baseIp}/CustomerFreelancer/GetFreelancerAppliedRequest`,{"headers":headers})
  }

  //startchatting
  freelancerstartchatting(Id) {
    const headers = new HttpHeaders({
      "Authorization" :"Bearer" + this.freelancerToken,
      "Content-Type" : "application/json"
    });
    return this.http.get<ChatIds>(`${this.baseIp}/CustomerFreelancer/StartChating/${Id}`,{"headers":headers})
  }
  FreelancerAcceptedHistoryreq() {
    const headers = new HttpHeaders({
      "Authorization" :"Bearer" + this.freelancerToken,
      "Content-Type" : "application/json"
    });
    return this.http.get(`${this.baseIp}/CustomerFreelancer/GetFreelancerAcceptedHistoryRequest`,{"headers":headers})
  }
  FreelancerCancelledHistoryreq() {
    const headers = new HttpHeaders({
      "Authorization" :"Bearer" + this.freelancerToken,
      "Content-Type" : "application/json"
    });
    return this.http.get(`${this.baseIp}/CustomerFreelancer/GetFreelancerCanceledHistoryRequest`,{"headers":headers})
  }
  //requests cancelled by customer for freelancer
  CustomerCancelledHistoryreq() {
    const headers = new HttpHeaders({
      "Authorization" :"Bearer" + this.freelancerToken,
      "Content-Type" : "application/json"
    });
    return this.http.get(`${this.baseIp}/CustomerFreelancer/GetCanceledFreelancerCustHistoryRequest`,{"headers":headers})
  }
  freelancerReply(Id,data){
    const headers = new HttpHeaders({
      "Authorization" :"Bearer" + this.freelancerToken,
      "Content-Type" : "application/json"
    });
    return this.http.put(`${this.baseIp}/CustomerFreelancer/FreelancerAccept/${Id}`,data,{"headers":headers})
  }
}
