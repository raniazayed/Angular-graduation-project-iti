import { Currentuser } from './../../../interfaces/currentuser';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SaverouteService } from 'src/app/services/saveroute.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { observable, Observable } from 'rxjs';
import { PARAMETERS } from '@angular/core/src/util/decorators';
import { LogoutComponent } from 'src/app/modals/logout/logout.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  redirectUrl: string;
  id: string;
  roleName : string ;
  constructor(private router: Router, private shared: SaverouteService, private authser: AuthenticationService, private route: ActivatedRoute, public dialog: MatDialog) { }

  // loginstatus:Observable<boolean>
  loginstatus: boolean;
  ngOnInit() {
    // debugger;
    this.loginstatus = this.authser.isLoggedIn
    console.log('loginstatus : ' + this.loginstatus)
    if( this.loginstatus ){
      this.roleName = this.authser.getRole()
      console.log(this.roleName)
    }

    
  }

  postJob() {
    // debugger;
    console.log(window.location.href)
    this.redirectUrl = this.router.url;
    console.log(this.redirectUrl);
    const url = this.redirectUrl;
    this.shared.prevUrl = url;
    console.log(this.router)
    console.log(this.shared.prevUrl);
    if (localStorage.getItem('currentUser')) {

      // if (this.redirectUrl == "/customer/myrequests"||this.redirectUrl == "/customer/allcategories") {
      //   console.log("/allcategories");
      //   this.router.navigate(['/customer/postjob'])
      // }
      if (this.redirectUrl.includes("/customer/freelancerprofile")) {
        console.log("/freelancerprofile")
        this.route.paramMap.subscribe(params => {
          console.log(params.get("id"))
          this.id = params.get("id")
          this.router.navigate(['/customer/postjobfreelaner', this.id])
        })
      } else if (this.redirectUrl.includes("customer/subcategory")) {
        this.route.paramMap.subscribe(params => {
          console.log(params.get("id"))
          this.id = params.get("id")
          // console.log(params)
          this.router.navigate(['/customer/postjobservice', this.id])
        })
      }
      else {
        this.router.navigate(['/customer/postjob'])
      }

    } else {

      this.router.navigate(['/login'])
    }

  }
  logout() {

    const dialogRef = this.dialog.open(LogoutComponent, {
      width: '600px',
    });
    this.loginstatus = this.authser.isLoggedIn
    console.log('loginstatus : ' + this.loginstatus)

  }
}
