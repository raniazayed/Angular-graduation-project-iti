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
    this.freelancerser.personalInfo().subscribe(data=>{
      this.personalInfo = data;
      console.log(data)
    })
  }
  deleteProject(Id){
    this.freelancerser.deleteProject().subscribe(data=>{

    })
  }
}
