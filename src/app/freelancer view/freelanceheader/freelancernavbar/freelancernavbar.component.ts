import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-freelancernavbar',
  templateUrl: './freelancernavbar.component.html',
  styleUrls: ['./freelancernavbar.component.scss']
})
export class FreelancernavbarComponent implements OnInit {

  constructor(private authser:AuthenticationService, private router:Router) { }

  ngOnInit() {
  }
  logout(){
    this.authser.logout();
    this.router.navigate(['']);
  }
}
