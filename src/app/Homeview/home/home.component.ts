import { Highrank } from './../../interfaces/highrank';
import { Component, OnInit } from '@angular/core';
import { RatedprojectsService } from 'src/app/services/ratedprojects.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  // ratedprojects:any;
  // i:number;
  ngOnInit() {
    // this.ratedprojectsser.getratedprojects().subscribe(data=>{
    //   this.ratedprojects = data;
    //   console.log(this.ratedprojects);
    // });
  
  }

}
