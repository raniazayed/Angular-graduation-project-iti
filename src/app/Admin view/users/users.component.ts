import { VerifyUsersService } from './../../services/verify-users.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { VerifySsnComponent } from 'src/app/modals/verify-ssn/verify-ssn.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private userser:VerifyUsersService, public dialog: MatDialog) { 
    
  }
  ngOnInit() {
    // this.users=[{"id":2,"emailVerified":true,"phoneVerified":true,"password":"123$Sarah","confirmedPassword":null,"email":"Alaa@gmail.com","roleId":2}]
   
    this.userser.getunverfied();
    
  }
  // getunverfied(){
  //   this.userser.getUnverifiedUser().subscribe(data=>{
  //     this.userser.users = data;
  //     console.log(this.userser.users)
  //   })
  // }
  openDialog(id): void {
    // this.getunverfied();
      // this.Ids = data ;
      // console.log(this.Ids);
      // this.x.ids = data;
        const dialogRef = this.dialog.open(VerifySsnComponent, {
          width: '600px',
          data: id
        });
       
    

  }

}
