import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit,Inject } from '@angular/core';
import { PostajobService } from 'src/app/services/postajob.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatDialogConfig} from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-postajob',
  templateUrl: './postajob.component.html',
  styleUrls: ['./postajob.component.scss']
})
export class PostajobComponent implements OnInit {
  postjobForm: FormGroup;
  freelancers: any;
  freelancerservices: any;
  formValue: {};
  choosenfreelancer: any;
  id: any;
  minDate = new Date(Date.now());
  maxDate = new Date(2020, 0, 1);
  allfreelancers: Array<any>=[];
  constructor(private postjobser: PostajobService,public dialog: MatDialog,config: NgbRatingConfig,private route:ActivatedRoute,private router:Router) {
    this.minDate.setDate(this.minDate.getDate() + 2)
    config.max = 5;
    config.readonly = true;
   }

  ngOnInit() {
    this.id = this.route.snapshot.params;
    console.log(this.id);
    this.postjobser.getcategories().subscribe(data => {
      this.getCategories = data;
    });
   
    this.postjobForm=new FormGroup({
      Category: new FormControl(null, [Validators.required]),
      SubCategory: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      requiredDate: new FormControl(null, [Validators.required]),
      selectedfreelancer: new FormControl(null, [Validators.required]),

    });
    // this.freelancers=[{"fName":"Rania ","id":1,"totalrate":1,"lName":"Zayed","totService":"Cooking","photo":"assets/images/freelancerphoto.svg"},{"fName":"Rania ","id":2,"totalrate":1,"lName":"Zayed","totService":"Cooking","photo":"assets/images/freelancerphoto.svg"}];
  }

  getSubCategories: any;
  getCategories: any;
  viewmore(){
    for(let i=3;i<this.freelancerservices.length;i++){

      this.allfreelancers.push(this.freelancerservices[i])
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
    // GETTING CATEGORIES FROM BACKEND
    onChangeSubCategory(SubCategoryId: number) {
      console.log(SubCategoryId)
      if (SubCategoryId) {
        console.log(SubCategoryId)
        this.postjobser.getFreelancers(SubCategoryId).subscribe(
          data => {
          this.freelancerservices=data;
            if(this.freelancerservices.length<=2){
              this.allfreelancers=this.freelancerservices;
              console.log(this.allfreelancers)
            }else{
              for(let i =0; i<2;i++){
                this.allfreelancers.push(this.freelancerservices[i]);
              }
              console.log(this.allfreelancers)
            }
            // if(this.freelancerservices.length)
         
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
    this.formValue={
      // "Category":form.value.Category,
      // "SubCategory":form.value.SubCategory,
      "Description":form.value.description,
      "StartDay":form.value.requiredDate,
      "FreelanceId":this.choosenfreelancer
    }
    form.value.selectedfreelancer=this.choosenfreelancer;
    
    // form.value.requiredDate= form.value.requiredDate.toString();
    console.log(this.formValue)
    console.log(typeof(form.value.requiredDate));
    this.postjobser.send(this.formValue).subscribe(data=>{
      console.log("send successfully")
    })
  
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

