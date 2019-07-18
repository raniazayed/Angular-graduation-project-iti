import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostajobService } from 'src/app/services/postajob.service';
import { MatDialog } from '@angular/material';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { Category } from 'src/app/interfaces/category';


@Component({
  selector: 'app-freelacerpostjob',
  templateUrl: './freelacerpostjob.component.html',
  styleUrls: ['./freelacerpostjob.component.scss']
})
export class FreelacerpostjobComponent implements OnInit {
  postjobForm: FormGroup;
  //freelancers: { "fName": string; "id": number; "totalrate": number; "lName": string; "totService": string; "photo": string; }[];
  choosenfreelancer: any;
  choosencategory:any
  // flag:any="cooking"
  id: any;
  allData:any;

  formValue: {
    "Description": any; "StartDay": any; "FreelanceId": any;
  };

  minDate = new Date(Date.now());
  maxDate = new Date(2020, 0, 1);
  constructor(private postjobser: PostajobService,public dialog: MatDialog,private route:ActivatedRoute,private config:NgbRatingConfig) { 
    this.minDate.setDate(this.minDate.getDate() + 2)
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.postjobser.getDataFreelancer(this.id).subscribe(data=>{  
      this.allData = data;
      console.log(this.id)
      console.log(this.allData);
 
    });
    this.postjobser.getcategories().subscribe(data => {
      this.getCategories = data;
      console.log(this.getCategories)
    });
    
    //this.choosencategory="Course"
    this.postjobForm=new FormGroup({
      Category: new FormControl(null, [Validators.required]),
      SubCategory: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      requiredDate: new FormControl(null, [Validators.required]),
      selectedfreelancer:new FormControl(null, [Validators.required])
    });
    // this.freelancers=[{"fName":"Rania ","id":1,"totalrate":1,"lName":"Zayed","totService":"Cooking","photo":"assets/images/freelancerphoto.svg"},{"fName":"Rania ","id":2,"totalrate":1,"lName":"Zayed","totService":"Cooking","photo":"assets/images/freelancerphoto.svg"}];
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
        }
      );
    } else {
      this.getSubCategories = null;
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

  
  send(form){
    this.formValue={
      // "Category":form.value.Category,
      // "SubCategory":form.value.SubCategory,
      "Description":form.value.description,
      "StartDay":form.value.requiredDate,
      "FreelanceId":this.id
    }
    console.log(this.formValue)
    this.postjobser.send(this.formValue).subscribe(data=>{
      console.log("send successfully")
    })
  }

}
