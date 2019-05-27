import { AuthenticationService } from './../../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private authser:AuthenticationService,private router:Router) { }

  ngOnInit() {
  }
  postJob(){
    // if (JSON.parse(localStorage.getItem('currentUser')).token != null){
      this.router.navigate(['customer/postjob'])
    // }
  }
  logout(){
    this.authser.logout();
    this.router.navigate(['']);
  }
}
