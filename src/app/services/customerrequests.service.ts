import { ChatIds } from './../interfaces/chat-ids';
import { FinishedReq } from './../interfaces/finished-req';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentUrlService } from './environment-url.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerrequestsService {
  baseIp: string;

  constructor(private http: HttpClient, private environmentser: EnvironmentUrlService) {
    this.baseIp = this.environmentser.baseIp;
  }
  // PENDDING REQUESTS
  Api = "http://192.168.43.180:2090/api";
  customerToken = JSON.parse(localStorage.getItem("currentUser")).token;

  penddingreq() {
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + this.customerToken,
      "Content-Type": "application/json"
    });
    return this.http.get(`${this.baseIp}/CustomerFreelancer/GetPendingRequest`,{"headers":headers})
  }
  cancelpendreq(Id) {
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + this.customerToken,
      "Content-Type": "application/json"
    });
    return this.http.put(`${this.baseIp}/CustomerFreelancer/CancelCustomerRequest/${Id}`,{"headers":headers})
  }
  // Declined REQUESTS
  declineRequest() {
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + this.customerToken,
      "Content-Type": "application/json"
    });
    return this.http.get(`${this.baseIp}/Notification/CustomerCanceledRequest/`,{"headers":headers})
  }
  deleteReq(Id) {
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + this.customerToken,
      "Content-Type": "application/json"
    });
    return this.http.delete(`${this.baseIp}/Notification/DeleteCustomerNotification/${Id}`,{"headers":headers})
  }
  //You Have got a Replay
  GotReplyRequest() {
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + this.customerToken,
      "Content-Type": "application/json"
    });
    return this.http.get(`${this.baseIp}/CustomerFreelancer/GetFreelancerResponse`,{"headers":headers})
  }
  //Finished Requests
  FinishedRequest() {
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + this.customerToken,
      "Content-Type": "application/json"
    });
    return this.http.get<FinishedReq>(`${this.baseIp}/CustomerFreelancer/GetFinishedRequest`,{"headers":headers})
  }
  // applied REQUESTS
  appliedReq() {
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + this.customerToken,
      "Content-Type": "application/json"
    });
    return this.http.get(`${this.baseIp}/CustomerFreelancer/GetAppliedRequest`,{"headers":headers})
  }
  cancelAppliedReq(Id) {

    const headers = new HttpHeaders({
      "Authorization": "Bearer " + this.customerToken,
      "Content-Type": "application/json"
    });
    return this.http.put(`${this.baseIp}/CustomerFreelancer/CancelCustomerRequest/${Id}`, {"headers":headers})
  }
  // START CHAT
  startChat(Id){
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + this.customerToken,
      "Content-Type": "application/json"
    });
    return this.http.get<ChatIds>(`${this.baseIp}/CustomerFreelancer/StartChating/${Id}`,{"headers":headers})

  }
  OKReplyReq(Id) {
    const headers = new HttpHeaders({
      "Authorization" :"Bearer " + this.customerToken,
      "Content-Type" : "application/json"
    });
    return this.http.put(`${this.baseIp}/CustomerFreelancer/CustomerAccept/${Id}`, {"headers":headers})
  }
  RateFinishedReq(rate,Id) {
    const headers = new HttpHeaders({
      "Authorization" :"Bearer " + this.customerToken,
      "Content-Type" : "application/json"
    });
    return this.http.put(`${this.baseIp}/CustomerFreelancer/CustomerRate/${Id}`, rate,{"headers":headers})
  }
  CommentFinishedReq(CustmerComment,Id) {
    const headers = new HttpHeaders({
      "Authorization" :"Bearer " + this.customerToken,
      "Content-Type" : "application/json"
    });
    return this.http.post(`${this.baseIp}/ServiceComplain/CustomerComplain/${Id}`, CustmerComment,{"headers":headers})
  }

  AcceptedHistoryreq() {
    const headers = new HttpHeaders({
      "Authorization" :"Bearer " + this.customerToken,
      "Content-Type" : "application/json"
    });
    return this.http.get(`${this.baseIp}/CustomerFreelancer/GetAcceptedHistoryRequest`,{"headers":headers})
  }
  CustomerCancelledHistoryreq() {
    const headers = new HttpHeaders({
      "Authorization" :"Bearer " + this.customerToken,
      "Content-Type" : "application/json"
    });
    return this.http.get(`${this.baseIp}/CustomerFreelancer/GetCanceledCustomerHistoryRequest`,{"headers":headers})
  }
  FreelancerCancelledHistoryreq() {
    const headers = new HttpHeaders({
      "Authorization" :"Bearer " + this.customerToken,
      "Content-Type" : "application/json"
    });
    return this.http.get(`${this.baseIp}/CustomerFreelancer/GetCanceledFreelancerHistoryRequest`,{"headers":headers})
  }

  getCustomerData() {
    const headers = new HttpHeaders({
      "Authorization" :"Bearer " + this.customerToken,
      "Content-Type" : "application/json"
    });
    return this.http.get(`${this.baseIp}/Customers/GetCustomer`,{"headers":headers})
  }
}
