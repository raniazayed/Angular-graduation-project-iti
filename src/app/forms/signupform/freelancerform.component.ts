import { User } from './../../interfaces/user';
import { Customer } from './../../interfaces/customer';
import { Freelancer } from './../../interfaces/freelancer';
import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../services/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { UploadimgService } from 'src/app/services/uploadimg.service';

@Component({
  selector: 'app-freelancerform',
  templateUrl: './freelancerform.component.html',
  styleUrls: ['./freelancerform.component.scss']
})
export class FreelancerformComponent implements OnInit {

  
  category: [];
  // changeSubcategories(category){
  //   console.log(category);
  //   this.SubCategoriesfn(category);
  // }
  // SubCategoriesfn(categoryValue){
  //   this.SubCategories.map(element=>{
  //     if(element==categoryValue){
  //      console.log(element)}
  //     })
  
  // }
  
  signupForm: FormGroup;
  userobj: object
  submitted = false;
  loading = false
  imageUrl1: string = "assets/images/user.png";
  imageUrl2: string = "assets/images/user.png";
  hide=true;

  selectedImge: File = null;
  flag: string;
  customer:Customer;
  freelancer:Freelancer;
  user:User;
  categories: Object;
  SubCategories:Object;
  freelancerId: any;
  customerId: Object;
  isRequired: boolean = true;
  genders:any=["male","female"]
  constructor(private router: Router, private loginSer: LoginService, private route: ActivatedRoute,
  private uploadimgser:UploadimgService
    , private title: Title) {
    this.title.setTitle('signup')
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      Email: new FormControl(null, [Validators.required,Validators.email]),
      Password: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(12), this.validatePassword]),
      ConfirmedPassword: new FormControl(null, [Validators.required]),
      FName: new FormControl(null, [Validators.required]),
      LName: new FormControl(null, [Validators.required]),
      Phone: new FormControl(null, [Validators.required, this.phoneCheck]),
      Address: new FormControl(null, [Validators.required]),
      Birthday: new FormControl(null),
      SSN: new FormControl(null, [Validators.required, this.SSNCheck]),
      SubCategory:new FormControl(null, [Validators.required]),
      Category:new FormControl(null, [Validators.required]),
      Photo:new FormControl(null, [Validators.required]),
      SSNPhoto:new FormControl(null, [Validators.required]),
      PersonDescription :new FormControl(null, [Validators.required]),
      Budget : new FormControl(null),
      gender : new FormControl(null)

    })
    this.loginSer.getcategories().subscribe(
      data => this.categories = data
    );
    this.flag =this.route.snapshot.params.flag1;
    console.log(this.route.snapshot.params)

  }
  // CHECK EMAIL IN DATABASE OR NOT
  checkEmail(event:any){
    console.log(event.target.value);
    this.loginSer.checkEmailDb({"email":event.target.value}).subscribe(data=>{
      if(data=="true"){
        console.log("doesn't exist")
      }else{
        console.log("exist")
      }
    })
  }
  // GETTING CATEGORIES FROM BACKEND
  onChangeCategory(categoryId: number) {
    console.log(categoryId)
    if (categoryId) {
      console.log(categoryId)
      this.loginSer.getsubcategories(categoryId).subscribe(
        data => {
          this.SubCategories = data;
          console.log( this.SubCategories)
        }
      );
    } else {
      this.SubCategories = null;
    }
  }
  selectedGender :any;
  // CHECK GENDER 
  radioChangeHandler(event:any){
    console.log(event.target.value)
    // this.selectedGender = event.target.value;
    if(event.target.value=="female"){
      this.selectedGender=0;
      console.log( this.selectedGender)
    }else{
      this.selectedGender=1;
      console.log( this.selectedGender)


    }
  }
  // GET DATA OF FORM
  get Email() {
    return this.signupForm.get("Email");
  }
  get Password() {
    return this.signupForm.get("Password");
  }
  get LName() {
    return this.signupForm.get("LName");
  }
  get ConfirmedPassword() {
    return this.signupForm.get("ConfirmedPassword");
  }
  get FName() {
    return this.signupForm.get("FName");
  }
  get Phone() {
    return this.signupForm.get("Phone");
  }
  get Address() {
    return this.signupForm.get("Address");
  }
  get Birthday() {
    return this.signupForm.get("Birthday");
  }
  get SSN() {
    return this.signupForm.get("SSN");
  }
  get Category(){
    return this.signupForm.get("Category");
  }
  get SubCategory(){
    return this.signupForm.get("SubCategory");
  }
  get Photo(){
    return this.signupForm.get("Photo");
  }
  get SSNPhoto(){
    return this.signupForm.get("SSNPhoto");

  }
  get PersonDescription(){
    return this.signupForm.get("PersonDescription");
  }
  get Budget(){
    return this.signupForm.get("Budget");
  }
  get gender(){
    return this.signupForm.get("gender");
  }
  // nationalIdCheck validation

  SSNCheck(control: FormControl): { [s: string]: boolean } {
    const pattdig = new RegExp('^[0-9]+$');
    console.log(control.value)
    if (pattdig.test(control.value) == true) {
      if (control.value.toString().length !== 14) {
        console.log('nonvalid')
        return { 'SSNerror': true } //non-valid
      }
      else {
        return null; //valid
      }
    }

  }

  // phoneCheck validation
  phoneCheck(control: FormControl): { [s: string]: boolean } {
    const pattdig = new RegExp('^[0-9]+$');
    if (pattdig.test(control.value) == true) {
      if (control.value.toString().length !== 11) {
        return { 'Phoneerror': true } //non-valid
      }
      else {
        return null; //valid
      }
    }

  }
  // CHECK PASSWORD
  validatePassword(control: FormControl): { [s: string]: boolean } {
    const patt = /[a-z]/g;
    const pattcapital = /[A-Z]/g;
    const pattdig = /\d/g;
    const pattspecial = /\W/g;

    if (patt.test(control.value) == true && pattdig.test(control.value) == true && pattspecial.test(control.value) == true && pattcapital.test(control.value) == true) {
      return null;
    }
    else {
      return { 'Passworderror': true }
    }
  }
  // LIVE PREVIEW IMAGE
  onFileSelected(file: FileList,i) {
    this.selectedImge = file.item(0);
    console.log(this.selectedImge)
    var reader = new FileReader();
    reader.onload = (event: any) => {
      if(i=='1'){
        this.imageUrl1 = event.target.result;
        console.log(this.imageUrl1)
      }else{
        this.imageUrl2 = event.target.result;
      }
    }
    reader.readAsDataURL(this.selectedImge)
    console.log(this.signupForm.controls);
    // debugger;
  }
  
  
 async onSubmit() {
    this.submitted = true;
    console.log(this.Email);
    console.log(this.gender);
 
    console.log(this.signupForm)
     await this.uploadimgser.upload(this.selectedImge);
    // this.imageUrl1=this.uploadimgser.imageUrl;
    // this.imageUrl2=this.uploadimgser.imageUrl;

      // debugger;
    // stop here if form is invalid
    // if (this.signupForm.invalid) {
    //   console.log('invalid')
    //   return;
    // }

      console.log('send to backend');
      // this.loading = true;
      // SEND CUSTOMER FORM 
      if (this.flag=="customer") {
        console.log('customer')
        this.user = {
          'Email': this.signupForm.get('Email').value,
          'Password': this.signupForm.get('Password').value,
          'ConfirmedPassword': this.signupForm.get('ConfirmedPassword').value,
          
        }
        
        this.customer = {
          'SSN': this.signupForm.get('SSN').value,
          'FName': this.signupForm.get('FName').value,
          'LName': this.signupForm.get('LName').value,
          'Address': this.signupForm.get('Address').value,
          'Birthday': this.signupForm.get('Birthday').value,
          'Phone': this.signupForm.get('Phone').value,
          'Photo':this.uploadimgser.imageUrl,
          'SSNPhoto':this.uploadimgser.imageUrl,
          'gender':this.selectedGender
        }
        console.log(this.customer);
        console.log(this.user);
        this.loginSer.userregister(this.user,this.flag).subscribe(
          data => {
              // this.router.navigate(['/login']);
              this.customerId = data
            console.log('ssuceess user')
              this.loginSer.customerregister(this.customer,this.customerId).subscribe(
                data => {
                    // this.router.navigate(['/login']);
                    console.log('customer success')
                },
                error => {
                    this.loading = false;
                    console.log('erroruser')
                });
          },
          error => {
              this.loading = false;
              console.log('error')
          });
      } else {
        console.log('freelancer');
        // SEND CUSTOMER FORM 
        this.freelancer  = {
          'SSN': this.signupForm.get('SSN').value,
          'FName': this.signupForm.get('FName').value,
          'LName': this.signupForm.get('LName').value,
          'Address': this.signupForm.get('Address').value,
          'Birthday': this.signupForm.get('Birthday').value,
          'Category':this.signupForm.get('Category').value,
          'SubCategory':this.signupForm.get('SubCategory').value,
          'Phone': this.signupForm.get('Phone').value,
          'Photo':this.uploadimgser.imageUrl,
          'SSNPhoto':this.uploadimgser.imageUrl,
          'PersonDescription':this.signupForm.get('PersonDescription').value,
          "BudgetperHour":this.signupForm.get('Budget').value,
          'gender':this.selectedGender


        }
        console.log(this.freelancer);
        this.user = {
          'Email': this.signupForm.get('Email').value,
          'Password': this.signupForm.get('Password').value,
          'ConfirmedPassword': this.signupForm.get('ConfirmedPassword').value,

        }
        console.log(this.user)
        this.loginSer.userregister(this.user,this.flag).subscribe(
          data => {
              // this.router.navigate(['/login']);
              this.freelancerId=data;
              console.log(this.freelancerId)
            console.log('ssuceess user')
              this.loginSer.freelancerregister(this.freelancer,this.freelancerId).subscribe(
                data => {
                    // this.router.navigate(['/login']);
                    console.log('customer success')
                },
                error => {
                    this.loading = false;
                    console.log('erroruser')
                });
          },
          error => {
              this.loading = false;
              console.log('error')
          });
      }
    
    // console.log(this.signupForm.controls);
  }

}
