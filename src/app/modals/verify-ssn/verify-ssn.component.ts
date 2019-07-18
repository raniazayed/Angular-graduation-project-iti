import { VerifyUsersService } from './../../services/verify-users.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-verify-ssn',
  templateUrl: './verify-ssn.component.html',
  styleUrls: ['./verify-ssn.component.scss']
})
export class VerifySsnComponent implements OnInit {
  ssnData: Object;

  constructor(private verifyuser:VerifyUsersService ,public dialogRef:MatDialogRef<VerifySsnComponent>,@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data)
   }

  ngOnInit() {
 
    this.getssn()
  }
  // GET SSN
  getssn(){
    this.verifyuser.getSSN(this.data).subscribe(data=>{
      this.ssnData = data;
      console.log(this.ssnData)
    })
  }
  validate(id){
    this.verifyuser.ValidateUser(id).subscribe(data=>{
      console.log("validate");
      this.getssn();
      this.verifyuser.getunverfied();
      this.dialogRef.afterClosed().subscribe(result => {
        
        console.log('The dialog was closed');
        // this.verifyuser.getUnverifiedUser().subscribe(data=>{
        //   console.log(data)
        // })
      });
    })
  }
  // DECLINE 
  Decline(id){
    this.verifyuser.DeclineUser(id).subscribe(data=>{
      console.log("declined")
    })
  }
}
