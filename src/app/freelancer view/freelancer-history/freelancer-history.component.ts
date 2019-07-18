import { FreelancerRequestsService } from './../../services/freelancer-requests.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-freelancer-history',
  templateUrl: './freelancer-history.component.html',
  styleUrls: ['./freelancer-history.component.scss']
})
export class FreelancerHistoryComponent implements OnInit {

  AcceptedHistoryReqs: Object;
  CustomerCancelledHistoryReqs: Object;
  FreelancerCancelledHistoryReqs: Object;

  constructor(private freelancerreqser: FreelancerRequestsService) { }

  ngOnInit() {
     // AcceptedHistory REQUESTS
     this.freelancerreqser.FreelancerAcceptedHistoryreq().subscribe(data => {
      this.AcceptedHistoryReqs = data;
      console.log(this.AcceptedHistoryReqs)
    })
  
   // freelancerCancelledHistory REQUESTS
   this.freelancerreqser.FreelancerCancelledHistoryreq().subscribe(data => {
    this.FreelancerCancelledHistoryReqs = data;
    console.log(this.FreelancerCancelledHistoryReqs)
  })

 // cusromerCancelledHistory REQUESTS for freelancer
 this.freelancerreqser.CustomerCancelledHistoryreq().subscribe(data => {
  this.CustomerCancelledHistoryReqs = data;
  console.log(this.CustomerCancelledHistoryReqs)
})
  
  }
 
}
