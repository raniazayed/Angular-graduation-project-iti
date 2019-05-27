import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { RatedprojectsService } from 'src/app/services/ratedprojects.service';

@Component({
  selector: 'app-allcategories',
  templateUrl: './allcategories.component.html',
  styleUrls: ['./allcategories.component.scss']
})
export class AllcategoriesComponent implements OnInit {
  allCategories: Object;
  allSubCategories: any;

  constructor(private loginser:LoginService,private ratedser:RatedprojectsService) { }

  ngOnInit() {
    this.ratedser.getAllCategories().subscribe(data=>{
      this.allCategories = data;
      // this.allSubCategories = this.allCategories.services;
      console.log(this.allCategories);
    })
  }

}
