import { RatedprojectsService } from './../../services/ratedprojects.service';
import { Component, OnInit } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-homebody',
  templateUrl: './homebody.component.html',
  styleUrls: ['./homebody.component.scss']
})
export class HomebodyComponent implements OnInit {

  constructor(private ratedprojectsser : RatedprojectsService,config: NgbRatingConfig) { 
    config.max = 5;
    config.readonly = true;
  }
  ratedprojects:any;
  i:number;
  ngOnInit() {
    this.ratedprojectsser.getratedprojects().subscribe(data=>{
      this.ratedprojects = data;
      console.log(this.ratedprojects);
    });
  
  }

}
