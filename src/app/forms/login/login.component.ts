import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { LoginService } from 'src/app/services/login.service';
import { first } from 'rxjs/operators';
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

  constructor(
    private router: Router,
    private loginser: LoginService,
    private route: ActivatedRoute,
    private authser: AuthenticationService,
    private title: Title) {
    this.title.setTitle('login');
    // debugger;
    // redirect to home if already logged in
    if (this.authser.currentUserValue) {
      this.router.navigate(['/']);
    }
  }



  ngOnInit() {
    this.loginForm = new FormGroup({
      Email: new FormControl(null, [Validators.required, this.validateEmail]),
      Password: new FormControl(null, [Validators.required])
    });

    // get return url from route parameters or default to '/'
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.returnUrl = this.route.snapshot.params
    console.log(this.returnUrl);
  }

  get Email() {
    return this.loginForm.get("Email");
  }
  get Password() {
    return this.loginForm.get("Password");
  }
  validateEmail(control: FormControl): { [s: string]: boolean } {
    var valid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log('hi')
    if (valid.test(control.value)) {
      console.log(control.value)
      return null; // vaild
    }
    return { 'validationError': true } //invalid
  }

  onSubmit(form) {
    this.submitted=true;
    if(this.loginForm.invalid){
      return;
    }
    this.loading = true;
    this.authser.login(this.Email.value,this.Password.value).pipe(first()).subscribe(
      data => {
        console.log('success')

          this.router.navigate([this.returnUrl]);
      },
      error => {
        console.log(error)
        this.loading = false;
      });
    console.log(form)
    console.log(this.loginForm.get('Email').value)
    console.log(this.loginForm.get('Password').value);
    console.log(form.value)
    // this.loginser.login(form.value);
  }

}
