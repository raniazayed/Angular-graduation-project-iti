import { FreelancerRequestsService } from './../../services/freelancer-requests.service';
import { FormGroup, FormControl ,Validators} from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { FinishedReq } from 'src/app/interfaces/finished-req';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-freelancer-reply',
  templateUrl: './freelancer-reply.component.html',
  styleUrls: ['./freelancer-reply.component.scss']
})
export class FreelancerReplyComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<FreelancerReplyComponent>,private frelancerser:FreelancerRequestsService,@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data)
  }
  freelancerreplyForm:FormGroup
  ngOnInit() {
    this.freelancerreplyForm = new FormGroup({
      Price: new FormControl(null,[Validators.required]),
      NoteReply: new FormControl(null,[Validators.required])

    });
  }
  // SUBMIT FREELANCER REPLY
  onSubmit(form){
    console.log(form.value);
    // console.log(typeof(form.value.CustomerComment));

    this.frelancerser.freelancerReply(this.data,form.value).subscribe(data=>{
      console.log("freelancer reply success")
    });
      this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
}
}
