import { Component, OnInit, Output, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UploadimgService } from 'src/app/services/uploadimg.service';
import { EditprofileService } from 'src/app/services/editprofile.service';
import { Router } from '@angular/router';
import { Editdata } from 'src/app/interfaces/editdata';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {

  @Input() editcustomer;
  selectedImge: any;
  submitted: boolean;
  formValue: Editdata;
  default: string;

  constructor(private uploadimgser: UploadimgService, private editSer: EditprofileService,private router:Router) { }
  editForm: FormGroup;
  imageUrl2: string 
  // formValue:Editdata
  ngOnInit() {
    this.editForm = new FormGroup({
      FName: new FormControl(null, [Validators.required]),
      LName: new FormControl(null, [Validators.required]),
      Phone: new FormControl(null, [Validators.required, this.phoneCheck]),
      Address: new FormControl(null,[Validators.required, Validators.minLength(5)]),
      Photo: new FormControl(null, [Validators.required]),
    });
    
    this.editSer.CustomerProfile().subscribe(data => {
      this.formValue = data;
      console.log(this.formValue)
      this.FName.setValue(this.formValue.fName) 
      this.LName.setValue(this.formValue.lName) 
      this.Phone.setValue(this.formValue.address) 
      this.Address.setValue(this.formValue.phone) 
      this.default=this.formValue.photo
    });

 

  
    this.editSer.freelancerProfile().subscribe(data => {
      this.formValue = data;
      console.log(this.formValue)
      this.FName.setValue(this.formValue.fName) 
      this.LName.setValue(this.formValue.lName) 
      this.Phone.setValue(this.formValue.address) 
      this.Address.setValue(this.formValue.phone) 
      this.default=this.formValue.photo
    })
  }
  get FName() {
    return this.editForm.get("FName");
  }
  get LName() {
    return this.editForm.get("LName");
  }
  get Phone() {
    return this.editForm.get("Phone");
  }
  get Address() {
    return this.editForm.get("Address");
  }
  get Photo() {
    return this.editForm.get("Photo");
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
  onFileSelected(file: FileList) {
    this.selectedImge = file.item(0);
    console.log(this.selectedImge)
    var reader = new FileReader();
    reader.onload = (event: any) => {

      this.default = event.target.result;
    }
    reader.readAsDataURL(this.selectedImge)
    // debugger;
  }

  async onSubmit(form) {
    console.log(form.value);
    this.submitted = true;
    await this.uploadimgser.upload(this.selectedImge);
    // send FORM OBJ TO BACKEND AFTER EDIT
    if (JSON.parse(localStorage.getItem("currentUser")).roleName == "customer") {
      this.formValue = {
        'fName': this.editForm.get('FName').value,
        'lName': this.editForm.get('LName').value,
        'phone': this.editForm.get('Phone').value,
        'address': this.editForm.get('Address').value,
        'photo':this.uploadimgser.imageUrl,
        "id":this.formValue.id

      }
      console.log(this.formValue)
      this.editSer.sendCustomerProfile(this.formValue).subscribe(data=>{
        console.log("success");
        this.router.navigate(["/customer/profile"])
      })
    } else {
      this.formValue = {
        'fName': this.editForm.get('FName').value,
        'lName': this.editForm.get('LName').value,
        'address': this.editForm.get('Address').value,
        'phone': this.editForm.get('Phone').value,
        'photo':this.uploadimgser.imageUrl,
        "id":this.formValue.id

      }
      console.log(this.formValue)
      this.editSer.sendFreelancerProfile(this.formValue).subscribe(data=>{
        console.log("success")
        this.router.navigate(["/freelancer/freelancerhome"])

      })
    }

  }
}
