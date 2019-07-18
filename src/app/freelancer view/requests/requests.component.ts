import { FreelancerReplyComponent } from './../../modals/freelancer-reply/freelancer-reply.component';
import { FreelancerRequestsService } from './../../services/freelancer-requests.service';
import { Component, OnInit,Inject } from '@angular/core';
import { ChatmodalComponent } from 'src/app/shared component/chatmodal/chatmodal.component';
import { MatDialog } from '@angular/material/dialog';
import { Ids } from 'src/app/interfaces/ids';
import { ChatIds } from './../../interfaces/chat-ids';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss'],
  
})

export class RequestsComponent implements OnInit {

  pendreqs: Object;
  declinedReqs: Object;
  appliedReqs: Object;
  Ids: ChatIds;
  x:Ids;
  requests: { "serveId": number; "fName": string; "lName": string; "description": string; "comment": string; "noteReply": string; "price": number; "deliveryDate": string; "startDay": string; }[];
  constructor(private freelancerreqser: FreelancerRequestsService, public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.pendreqeuest()
   this.grtRequests();
  this.getapplieddata();
  this.requests = [{"serveId":1,"fName":"Rania","lName":"Zayed","description":"I'm Front-end Developer ","comment":"I want service from you loream ipsum I want service from you loream ipsum","noteReply":"dddddd","price":1000.0,"deliveryDate":"2019-06-13T07:59:38","startDay":"2017-05-13T07:59:38"},{"serveId":3,"fName":"dd","lName":"aaaa","description":"hiii","comment":"Esreaa","noteReply":"asas","price":900.0,"deliveryDate":"2019-06-13T07:59:38","startDay":"2019-06-10T07:59:38"}];
  }
  pendreqeuest(){
     // PENDDING REQUESTS
     this.freelancerreqser.Freelancerpenddingreq().subscribe(data => {
      this.pendreqs = data;
      console.log(this.pendreqs)
    })
  }
  getapplieddata(){
  // applied REQUESTS
  this.freelancerreqser.freelancerappliedReq().subscribe(data => {
    this.appliedReqs = data;
    console.log(this.appliedReqs)

  });
  }
  // delete
  grtRequests(){
 // Declined REQUESTS
 this.freelancerreqser.freelancerdeclineRequest().subscribe(data => {
  this.declinedReqs = data;
  console.log(this.declinedReqs)
});
  }
  // cancel REQUESTS
  cancelpendreq(Id) {
    this.freelancerreqser.freelancercancelpendreq(Id).subscribe(data => {
      console.log('req cancel');
      this.pendreqeuest();
      this.getapplieddata();
    })

  }
  // delete REQUESTS
  deleteReq(Id) {
    this.freelancerreqser.deleteReq(Id).subscribe(data => {
      console.log('found and deleted');
      this.grtRequests();
    })
  }
 // chat modal
 openDialog(id): void {
    console.log(id)
  this.freelancerreqser.freelancerstartchatting(id).subscribe(data=>{
    console.log(data)
    this.Ids= data ;
    // console.log(this.Ids);
    // this.x.ids = data;
      const dialogRef = this.dialog.open(ChatmodalComponent, {
        width: '600px',
        data: this.Ids
      });
  })

}
accept(id){
  const dialogRef = this.dialog.open(FreelancerReplyComponent, {
    width: '600px',
    data: id
  });
}

}
