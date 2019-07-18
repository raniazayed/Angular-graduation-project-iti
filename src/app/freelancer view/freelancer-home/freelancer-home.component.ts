import { FreelancerService } from './../../services/freelancer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-freelancer-home',
  templateUrl: './freelancer-home.component.html',
  styleUrls: ['./freelancer-home.component.scss']
})
export class FreelancerHomeComponent implements OnInit {

  constructor(private freelancerser:FreelancerService) { }
  personalInfo:any;
  ngOnInit() {
   this.getfreelancerdata();
    
    // this.personalInfo={"fName":"Rania ","lName":"Zayed","fullName":"Rania Zayed","personDescription":"loream ipsum loream ipsum loream ipsum loream ipsum","image":"assets/images/freelancerprofilr.svg",
    // "totalrate":4,"photo":"assets/images/freelancerphoto.svg","projects":[{"projectName":"project1","projectDescription":"loream ipsum loream ipsum loream ipsum loream ipsum","rate":5,"photo":"assets/images/cookingfood.svg"},{"projectName":"project1","projectDescription":"loream ipsum loream ipsum loream ipsum loream ipsum","rate":5,"photo":"assets/images/cookingfood.svg"},{"projectName":"project1","projectDescription":"loream ipsum loream ipsum loream ipsum loream ipsum","rate":5,"photo":"assets/images/cookingfood.svg"}]}
  }
  getfreelancerdata(){
    this.freelancerser.personalInfo().subscribe(data=>{
      this.personalInfo = data;
      console.log(this.personalInfo)
    });
  }
  deleteProject(Id){
    this.freelancerser.deleteProject(Id).subscribe(data=>{
      console.log("deleted");
      this.getfreelancerdata()
    })
  }
}
