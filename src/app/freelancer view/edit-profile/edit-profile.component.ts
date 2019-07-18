import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  selectedImge: Blob;

  constructor() { }
  editForm:FormGroup;
  imageUrl2: string = "assets/images/user.png";

  ngOnInit() {
    this.editForm = new FormGroup({
      FName: new FormControl(null, [Validators.required]),
      LName: new FormControl(null, [Validators.required]),
      Phone: new FormControl(null, [Validators.required, this.phoneCheck]),
      Address: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      Photo: new FormControl(null, [Validators.required]),


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
  get Photo(){
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
   
      this.imageUrl2 = event.target.result;
    }
    reader.readAsDataURL(this.selectedImge)
    // debugger;
  }
  
  onSubmit(form){
  console.log(form.value)
  }

}
