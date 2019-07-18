import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { LogoutComponent } from 'src/app/modals/logout/logout.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-freelancernavbar',
  templateUrl: './freelancernavbar.component.html',
  styleUrls: ['./freelancernavbar.component.scss']
})
export class FreelancernavbarComponent implements OnInit {

  constructor(private authser:AuthenticationService, private router:Router, public dialog: MatDialog) { }

  ngOnInit() {
  }
  logout(){
    const dialogRef = this.dialog.open(LogoutComponent, {
      width: '600px',
      // data: id
    });
    // this.authser.logout();
    // this.router.navigate(['']);
  }
}
