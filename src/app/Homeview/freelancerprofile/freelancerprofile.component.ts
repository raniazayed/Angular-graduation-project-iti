import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GetfreelancerService } from 'src/app/services/getfreelancer.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-freelancerprofile',
  templateUrl: './freelancerprofile.component.html',
  styleUrls: ['./freelancerprofile.component.scss']
})
export class FreelancerprofileComponent implements OnInit {
  freelancerId: number;
  freelancer: any;
  freelancerProfile: any;



  constructor(private route : ActivatedRoute,private getfreelancerser:GetfreelancerService,config: NgbRatingConfig) { 
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit() {
    this.freelancerId = this.route.snapshot.params['id'];
    console.log(this.freelancerId);
    this.getfreelancerser.getfreelancer(this.freelancerId).subscribe(data=>{
      this.freelancer = data ;
      console.log(this.freelancer)
    });
    // this.freelancerProfile={"fName":"Rania ","lName":"Zayed","image":"assets/images/freelancerprofilr.svg",
    // "totalrate":4,"photo":"assets/images/freelancerphoto.svg","projects":[{"projectName":"project1","ProjectDescription":"loream ipsum loream ipsum loream ipsum loream ipsum","rate":5,"photo":"assets/images/cookingfood.svg"},{"projectName":"project1","ProjectDescription":"loream ipsum loream ipsum loream ipsum loream ipsum","rate":5,"photo":"assets/images/cookingfood.svg"},{"projectName":"project1","ProjectDescription":"loream ipsum loream ipsum loream ipsum loream ipsum","rate":5,"photo":"assets/images/cookingfood.svg"}]}
  }

  // viewMore(){
  //   if(freelancerProfile.projects.length)
  // }
  // DELETE PROJECT FROM FREELANCERS WORK
  DeleteProject(projectid){
    console.log(projectid);
    // this.getfreelancerser.DeleteProject(projectid).subscribe(data=>{
    //   console.log("delete project")
    // })
  }


}
