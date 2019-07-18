import { FreelancerService } from './../../services/freelancer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  schedules: any;
  personalInfo: Object;

  constructor(private freelancerser:FreelancerService) { }

  ngOnInit() {
      this.freelancerser.personalInfo().subscribe(data=>{
      this.personalInfo = data;
      console.log(this.personalInfo)
    });
    // this.schedules = [{"projectname":"cooking","fname":"rania","startdate":"1/1/2019","deadline":'1/1/2020'},{"projectname":"cooking","fname":"rania","startdate":"1/1/2019","deadline":'1/1/2020'},{"projectname":"cooking","fname":"rania","startdate":"1/1/2019","deadline":'1/1/2020'}]
   this.freelancerser.freelancerschdule().subscribe(data=>{
      this.schedules = data;
      console.log(this.schedules)
    });
    // this.personalInfo={"fName":"Rania ","lName":"Zayed","fullName":"Rania Zayed","personDescription":"loream ipsum loream ipsum loream ipsum loream ipsum","image":"assets/images/freelancerprofilr.svg",
    // "totalrate":4,"photo":"assets/images/freelancerphoto.svg","projects":[{"projectName":"project1","projectDescription":"loream ipsum loream ipsum loream ipsum loream ipsum","rate":5,"photo":"assets/images/cookingfood.svg"},{"projectName":"project1","projectDescription":"loream ipsum loream ipsum loream ipsum loream ipsum","rate":5,"photo":"assets/images/cookingfood.svg"},{"projectName":"project1","projectDescription":"loream ipsum loream ipsum loream ipsum loream ipsum","rate":5,"photo":"assets/images/cookingfood.svg"}]}
  }

}
