import { FinishedReq } from './../../interfaces/finished-req';
import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CustomerrequestsService } from 'src/app/services/customerrequests.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss']
})
export class RateComponent implements OnInit {
  ctrl = new FormControl(null, Validators.required);
  finishedReq: Object;
  constructor(private customerreqser:CustomerrequestsService, public dialogRef:MatDialogRef<RateComponent>,@Inject(MAT_DIALOG_DATA) public data: FinishedReq) {
    console.log(data)
   }

  ngOnInit() {
    this.customerreqser.FinishedRequest().subscribe(data=>{
      this.finishedReq = data;
      console.log(this.finishedReq)
    })
  }
  toggle() {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
    console.log(this.ctrl.value);
    this.customerreqser.RateFinishedReq(this.ctrl.value,this.data.serveId).subscribe(data=>{
      console.log("rate success")
    })
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }
  // RateFinishedReq(){
  //   // this.customerreqser.RateFinishedReq()
  // }
}
