import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostajobService } from 'src/app/services/postajob.service';
import { MatDialog } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/interfaces/category';
import { Freelancerpostjob } from 'src/app/interfaces/freelancerpostjob';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-servicepostjob',
  templateUrl: './servicepostjob.component.html',
  styleUrls: ['./servicepostjob.component.scss']
})
export class ServicepostjobComponent implements OnInit {

  postjobForm: FormGroup;
  id: any;
  
  //freelancers: { "fName": string; "id": number; "totalrate": number; "lName": string; "totService": string; "photo": string; }[];
  freelancers:any;
  choosenfreelancer: any;
  choosencategory:any
  allData:Category;
  formValue: {
    // "Category":form.value.Category,
    // "SubCategory":form.value.SubCategory,
    "Description": any; "StartDay": any; "FreelanceId": any;
  };
  minDate = new Date(Date.now());
  maxDate = new Date(2020, 0, 1);
  allfreelancers: Array<any>=[];
  constructor(private postjobser: PostajobService,public dialog: MatDialog,private route:ActivatedRoute,private config:NgbRatingConfig) { 
    this.minDate.setDate(this.minDate.getDate() + 2)
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.postjobser.getData(this.id).subscribe(data=>{  
      this.allData = data;
      console.log(this.allData);
 
    });
    console.log(this.id)
    this.postjobser.getcategories().subscribe(data => {
      this.getCategories = data;
      console.log(this.getCategories)
    });

    
    this.choosencategory="Course"
    this.postjobForm=new FormGroup({
      Category: new FormControl(null, [Validators.required]),
      SubCategory: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      requiredDate: new FormControl(null, [Validators.required]),
      selectedfreelancer:new FormControl(null, [Validators.required])
    });
  //  this.freelancers=[{"fName":"Rania ","id":1,"totalrate":1,"lName":"Zayed","totService":"Cooking","photo":"assets/images/freelancerphoto.svg"},{"fName":"Rania ","id":2,"totalrate":1,"lName":"Zayed","totService":"Cooking","photo":"assets/images/freelancerphoto.svg"}];
  }
  
  viewmore(){
    for(let i=3;i<this.getSubCategories.length;i++){

      this.allfreelancers.push(this.getSubCategories[i])
    }
  }

  get requiredDate(){
    return this.postjobForm.get("requiredDate");
  }
  get Category(){
    return this.postjobForm.get("Category");
  }
  get SubCategory(){
    return this.postjobForm.get("SubCategory");
  }
  get description(){
    return this.postjobForm.get("description");
  }
  get selectedfreelancer(){
    return this.postjobForm.get("selectedfreelancer");
  }
  getSubCategories: any;
  getCategories: any;
  // GETTING CATEGORIES FROM BACKEND
  onChangeCategory(categoryId: number) {
    console.log(categoryId)
    if (categoryId) {
      console.log(categoryId)
      this.postjobser.getsubcategories(categoryId).subscribe(
        data => {
          this.getSubCategories = data;
          console.log(this.getSubCategories)
          if(this.getSubCategories.length<=2){
            this.allfreelancers=this.getSubCategories;
            console.log(this.allfreelancers)
          }else{
            for(let i =0; i<2;i++){
              this.allfreelancers.push(this.getSubCategories[i]);
            }
            console.log(this.allfreelancers)
          }
        }
      );
    } else {
      this.getSubCategories = null;
    }
  }
  selectCard(selectcard){
    console.log(selectcard);
    this.choosenfreelancer=selectcard
  }
  send(form){
    form.value.selectedfreelancer=this.choosenfreelancer;
    this.formValue={
      // "Category":form.value.Category,
      // "SubCategory":form.value.SubCategory,
      "Description":form.value.description,
      "StartDay":form.value.requiredDate,
      "FreelanceId":this.choosenfreelancer
    }
    console.log(this.formValue)
    this.postjobser.send(this.formValue).subscribe(data=>{
      console.log("send successfully")
    },err=>console.log(err))
  }
  // freelancer modal
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '600px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}
