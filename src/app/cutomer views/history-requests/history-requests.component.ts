import { Component, OnInit } from '@angular/core';
import { CustomerrequestsService } from 'src/app/services/customerrequests.service';

@Component({
  selector: 'app-history-requests',
  templateUrl: './history-requests.component.html',
  styleUrls: ['./history-requests.component.scss']
})
export class HistoryRequestsComponent implements OnInit {
  AcceptedHistoryReqs: Object;
  CustomerCancelledHistoryReqs: Object;
  FreelancerCancelledHistoryReqs: Object;
  requests: { "serveId": number; "fName": string; "lName": string; "description": string; "comment": string; "noteReply": string; "price": number; "deliveryDate": string; "startDay": string; }[];
  constructor(private customerreqser: CustomerrequestsService) { }

  ngOnInit() {
    this.requests = [{"serveId":1,"fName":"dd","lName":"aaaa","description":"wwwwwwww","comment":"sssss","noteReply":"dddddd","price":1000.0,"deliveryDate":"2019-06-13T07:59:38","startDay":"2017-05-13T07:59:38"},{"serveId":3,"fName":"dd","lName":"aaaa","description":"hiii","comment":"Esreaa","noteReply":"asas","price":900.0,"deliveryDate":"2019-06-13T07:59:38","startDay":"2019-06-10T07:59:38"}];

       // AcceptedHistory REQUESTS
       this.customerreqser.AcceptedHistoryreq().subscribe(data => {
        this.AcceptedHistoryReqs = data;
        console.log(this.AcceptedHistoryReqs)
      })
    
     // CustomerCancelledHistory REQUESTS
     this.customerreqser.CustomerCancelledHistoryreq().subscribe(data => {
      this.CustomerCancelledHistoryReqs = data;
      console.log(this.CustomerCancelledHistoryReqs)
    })
  
   // FreelancerCancelledHistory REQUESTS
   this.customerreqser.FreelancerCancelledHistoryreq().subscribe(data => {
    this.FreelancerCancelledHistoryReqs = data;
    console.log(this.FreelancerCancelledHistoryReqs)
  })
  }

}
