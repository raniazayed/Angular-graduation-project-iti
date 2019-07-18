import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { LoginService } from 'src/app/services/login.service';
import { first, filter } from 'rxjs/operators';
import { SaverouteService } from 'src/app/services/saveroute.service';
// import { filter } from 'rxjs/operator/filter'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  userData: any;
  userImg: any;
  userdefaultimg: void;
  loading = false;
  submitted = false;
  returnUrl: any;
  previousUrl: string;
  redirectUrl: string;
  access: boolean;

  constructor(
    private shared: SaverouteService,
    private router: Router,
    private loginser: LoginService,
    private route: ActivatedRoute,
    private authser: AuthenticationService,
    private title: Title) {
    this.title.setTitle('login');
    console.log(this.router.url)
    const prevUrl = '';

    //   this.router.events.pipe(filter(event => event instanceof NavigationEnd))
    // .subscribe(e => {
    //   debugger;
    //   console.log('prev:', this.previousUrl);
    //   this.previousUrl = e.url;
    //   console.log('prev url:', this.previousUrl);
    // });
    // debugger;
    // redirect to home if already logged 

    if (this.authser.isLoggedIn) {
      console.log("auth")
      this.router.navigate(['/']);
    }
  }



  ngOnInit() {
    this.loginForm = new FormGroup({
      Email: new FormControl(null, [Validators.required, this.validateEmail]),
      Password: new FormControl(null, [Validators.required])
    });
    this.access=false;


  }

  get Email() {
    return this.loginForm.get("Email");
  }
  get Password() {
    return this.loginForm.get("Password");
  }
  validateEmail(control: FormControl): { [s: string]: boolean } {
    var valid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (valid.test(control.value)) {
      console.log(control.value)
      return null; // vaild
    }
    return { 'validationError': true } //invalid
  }

  onSubmit(form) {

    this.submitted = true;
    // this.access=false;

    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.authser.login(this.Email.value, this.Password.value).pipe(first()).subscribe(
      data => {
        console.log('success')
        this.shared.prevUrl;
        console.log(this.shared.prevUrl);
        // if((localStorage.getItem("currentUser"))
        console.log(data)
      if(JSON.parse(localStorage.getItem("currentUser")).roleName==="customer"){
        this.router.navigate(["/customer/home"])
      }else if(JSON.parse(localStorage.getItem("currentUser")).roleName==="freelancer"){
        this.router.navigate(["/freelancer/freelancerhome"])
      }
      else if(JSON.parse(localStorage.getItem("currentUser")).roleName==="norole"){
        this.router.navigate(["/pending"])

      }else if((JSON.parse(localStorage.getItem("currentUser")).roleName==="admin")){
        this.router.navigate(["/admin/Statistics"])
      }
      console.log(data)
          // if(this.redirectUrl)
          // if (this.redirectUrl == "/allcategories" || this.redirectUrl == "/") {
          //   console.log("/allcategories");
          //   this.router.navigate(['/customer/postjob'])
          // }else if(this.redirectUrl=="/freelancerprofile/:id"){
          //   console.log("/freelancerprofile")

          // }else if(this.redirectUrl=="/subcategory/:id"){
          //   console.log("/subcategory")

          // }
        
        // this.router.navigate([this.shared.prevUrl]);
      },
      error => {
        console.log(error);
        this.loading = false;
        if(error.ok==false){
          this.access=true;
          this.Email.setValue(" ");
          this.Password.setValue(" ");

        }
      });
    console.log(form)
    console.log(this.loginForm.get('Email').value)
    console.log(this.loginForm.get('Password').value);
    console.log(form.value)
    // this.loginser.login(form.value);
  }

}
