import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerComponent } from 'src/app/cutomer views/customer/customer.component';
import { CustomerrequestsService } from 'src/app/services/customerrequests.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RateComponent } from '../rate/rate.component';
import { FinishedReq } from 'src/app/interfaces/finished-req';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  commentForm:FormGroup
  finishedReq: FinishedReq;
  constructor(private customerSer:CustomerrequestsService,public dialogRef:MatDialogRef<CommentComponent>,@Inject(MAT_DIALOG_DATA) public data: FinishedReq) { }

  ngOnInit() {
    this.commentForm = new FormGroup({
      CustomerComment: new FormControl(null)
    });
    this.customerSer.FinishedRequest().subscribe(data=>{
      this.finishedReq = data;
      console.log(this.finishedReq)
    })
  }
  onSubmit(form){
    console.log(form.value);
    console.log(typeof(form.value.CustomerComment));

    this.customerSer.CommentFinishedReq(form.value,this.data.serveId).subscribe(data=>{
      console.log("comment success")
    });
      this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
    this.dialogRef.close()
  }
}
