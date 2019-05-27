import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GetfreelancerService } from 'src/app/services/getfreelancer.service';

@Component({
  selector: 'app-freelancerprofile',
  templateUrl: './freelancerprofile.component.html',
  styleUrls: ['./freelancerprofile.component.scss']
})
export class FreelancerprofileComponent implements OnInit {
  freelancerId: number;
  freelancer: any;

  constructor(private route : ActivatedRoute,private getfreelancerser:GetfreelancerService) { }

  ngOnInit() {
    this.freelancerId = this.route.snapshot.params['id'];
    console.log(this.freelancerId);
    this.getfreelancerser.getfreelancer(1).subscribe(data=>{
      this.freelancer = data ;
      console.log(this.freelancer)
    })
  }
  // DELETE PROJECT FROM FREELANCERS WORK
  DeleteProject(projectid){
    console.log(projectid);
    // this.getfreelancerser.DeleteProject(projectid).subscribe(data=>{
    //   console.log("delete project")
    // })
  }


}
