import { Component, OnInit } from '@angular/core';
import { CustomerrequestsService } from 'src/app/services/customerrequests.service';
import { CommentComponent } from './../../modals/comment/comment.component';
import { RateComponent } from 'src/app/modals/rate/rate.component';
import { MatDialog } from '@angular/material';
import { FinishedReq } from 'src/app/interfaces/finished-req';
@Component({
  selector: 'app-finished-requests',
  templateUrl: './finished-requests.component.html',
  styleUrls: ['./finished-requests.component.scss']
})
export class FinishedRequestsComponent implements OnInit {
  FinishedReqs: FinishedReq;
  GotReplys: Object;
  requests: { "serveId": number; "fName": string; "lName": string; "description": string; "comment": string; "noteReply": string; "price": number; "deliveryDate": string; "startDay": string; }[];
  pendreqs: Object;
  appliedReqs: Object;
  declinedReqs: Object;

  constructor(private customerreqser: CustomerrequestsService, public dialog: MatDialog) { }

  ngOnInit() {
    this.requests = [{"serveId":1,"fName":"dd","lName":"aaaa","description":"wwwwwwww","comment":"sssss","noteReply":"dddddd","price":1000.0,"deliveryDate":"2019-06-13T07:59:38","startDay":"2017-05-13T07:59:38"},{"serveId":3,"fName":"dd","lName":"aaaa","description":"hiii","comment":"Esreaa","noteReply":"asas","price":900.0,"deliveryDate":"2019-06-13T07:59:38","startDay":"2019-06-10T07:59:38"}];
      //Finished Requests
   
      this.getpending();

}

cancelAppliedReq(Id) {
  this.customerreqser.cancelpendreq(Id).subscribe(data => {
    console.log('req cancel');
    this.getpending()
  })
}
getpending(){
   
    this.OKReply(); 
    this.customerreqser.FinishedRequest().subscribe(data => {
      this.FinishedReqs = data;
      console.log(this.FinishedReqs);
    
    });
}
OKReply(){
    //You have got a replay
     this.customerreqser.GotReplyRequest().subscribe(data => {
      this.GotReplys = data;
      console.log(this.GotReplys)
    });
}
//Ok Reply Request
OKReplyReq(Id) {
  this.customerreqser.OKReplyReq(Id).subscribe(data => {
    console.log("success OK req");
    this.OKReply();
  })
}
  // RATE MODAL
  rate(Id): void {
    const dialogRef = this.dialog.open(RateComponent, {
      width: '600px',
      data: {serveId:Id}
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
   // comment MODAL
   comment(Id): void {
    const dialogRef = this.dialog.open(CommentComponent, {
      width: '500px',height:'300px',
      data: {serveId:Id}

    });
    this.dialog
  }

}
