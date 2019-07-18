import { Ids } from 'src/app/interfaces/ids';
import { ChatIds } from './../../interfaces/chat-ids';
import { FinishedReq } from './../../interfaces/finished-req';
import { ChatmodalComponent } from './../../shared component/chatmodal/chatmodal.component';
import { Component, OnInit } from '@angular/core';
import { CustomerrequestsService } from 'src/app/services/customerrequests.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-myrequests',
  templateUrl: './myrequests.component.html',
  styleUrls: ['./myrequests.component.scss']
})
export class MyrequestsComponent implements OnInit {
  pendreqs: Object;
  declinedReqs: Object;
  appliedReqs: Object;
  FinishedReqs: FinishedReq;
  GotReplys: Object;
  Ids: ChatIds;
  x:Ids;
  requests: { "serveId": number; "fName": string; "lName": string; "description": string; "comment": string; "noteReply": string; "price": number; "deliveryDate": string; "startDay": string; }[];
  // requests: { "serveId": number; "fName": string; "lName": string; "description": string; "comment": string; "noteReply": string; "price": number; "deliveryDate": string; "startDay": string; }[];

  constructor(private customerreqser: CustomerrequestsService, public dialog: MatDialog) { 
    
  }

  ngOnInit() {
    this.requests = [{"serveId":1,"fName":"Rania","lName":"Zayed","description":"I'm Front-end Developer ","comment":"I want service from you loream ipsum I want service from you loream ipsum","noteReply":"dddddd","price":1000.0,"deliveryDate":"2019-06-13T07:59:38","startDay":"2017-05-13T07:59:38"},{"serveId":3,"fName":"dd","lName":"aaaa","description":"hiii","comment":"Esreaa","noteReply":"asas","price":900.0,"deliveryDate":"2019-06-13T07:59:38","startDay":"2019-06-10T07:59:38"}];
    this.x = new Ids();
          // PENDDING REQUESTS
          this.getpending();
          // Declined REQUESTS
          this.getdeclined();
          // applied REQUESTS
          this.getapplied();


         
  }
  
 // PENDDING REQUESTS
 getpending(){
  this.customerreqser.penddingreq().subscribe(data => {
    this.pendreqs = data;
    console.log(this.pendreqs)
  });
 }
cancelpendreq(Id) {
  this.customerreqser.cancelpendreq(Id).subscribe(data => {
    console.log('req cancel');
    this.getpending()
  })
}
getdeclined(){
  this.customerreqser.declineRequest().subscribe(data => {
    this.declinedReqs = data;
    console.log(this.declinedReqs)
  });
}
// Declined REQUESTS
deleteReq(Id) {
  this.customerreqser.deleteReq(Id).subscribe(data => {
    console.log('found and deleted');
    this.getdeclined();
  });
}
// applied REQUESTS
getapplied(){
  this.customerreqser.appliedReq().subscribe(data => {
    this.appliedReqs = data;
    console.log(this.appliedReqs)

  });
}
cancelAppliedReq(Id) {
  this.customerreqser.cancelAppliedReq(Id).subscribe(data => {
    console.log("success cancel req");
    this.getapplied();
  });
}

  // chat modal
  openDialog(id): void {
    
    this.customerreqser.startChat(id).subscribe(data=>{
      this.Ids = data ;
      console.log(this.Ids);
      this.x.ids = data;
        const dialogRef = this.dialog.open(ChatmodalComponent, {
          width: '600px',
          data: this.Ids
        });
    })

  }
}
