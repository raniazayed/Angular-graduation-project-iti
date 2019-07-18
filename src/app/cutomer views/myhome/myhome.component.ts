import { CustomerrequestsService } from 'src/app/services/customerrequests.service';
import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-myhome',
  templateUrl: './myhome.component.html',
  styleUrls: ['./myhome.component.scss']
})
export class MyhomeComponent implements OnInit {
  // customerProfile: { "fName": string; "lName": string; "image": string; "totalrate": number; "photo": string; "projects": { "projectName": string; "service": string; "rate": number; "photo": string; }[]; };
  AcceptedHistoryReqs: Object;
  customerProfile: Object;

  constructor(private config: NgbRatingConfig,private customerreqser:CustomerrequestsService) {
    config.max = 5;
    config.readonly = true;
   }

  ngOnInit() {
    // this.customerProfile={"fName":"Rania ","lName":"Zayed","image":"assets/images/freelancerprofilr.svg",
    // "totalrate":4,"photo":"assets/images/freelancerphoto.svg","projects":[{"projectName":"Service Name","service":"Freelancer Name","rate":4,"photo":"assets/images/cookingfood.svg"},{"projectName":"Service Name","service":"Freelancer Name","rate":5,"photo":"assets/images/cookingfood.svg"},{"projectName":"Service Name","service":"Freelancer Name","rate":5,"photo":"assets/images/cookingfood.svg"}]}

      // AcceptedHistory REQUESTS
      this.customerreqser.AcceptedHistoryreq().subscribe(data => {
        this.AcceptedHistoryReqs = data;
        console.log(this.AcceptedHistoryReqs)
      });
      this.customerreqser.getCustomerData().subscribe(data => {
        this.customerProfile = data;
        console.log(this.customerProfile)
      });
  }

}
