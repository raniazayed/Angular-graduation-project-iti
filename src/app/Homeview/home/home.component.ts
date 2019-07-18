import { Highrank } from './../../interfaces/highrank';
import { Component, OnInit } from '@angular/core';
import { RatedprojectsService } from 'src/app/services/ratedprojects.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  photos: any[];

  constructor() { }
  // ratedprojects:any;
  // i:number;
  ngOnInit() {
    this.photos =["assets/images/person1.jpg","assets/images/person2.jpg","assets/images/person3.jpg","assets/images/person4.jpg"]
    // this.ratedprojectsser.getratedprojects().subscribe(data=>{
    //   this.ratedprojects = data;
    //   console.log(this.ratedprojects);
    // });
  
  }

}
