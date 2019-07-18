import { AuthenticationService } from './../../services/authentication.service';
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
  Categories: any[];
  array:any;
  loginstatus: any;
  photos: any[];
 
  constructor(private loginser:LoginService,private ratedser:RatedprojectsService,private authser:AuthenticationService) { }

  ngOnInit() {
    this.ratedser.getAllCategories().subscribe(data=>{
      this.allCategories = data;
      // this.allSubCategories = this.allCategories.services;
      console.log(this.allCategories);
    });
    this.loginstatus = this.authser.isLoggedIn
    console.log('loginstatus : ' + this.loginstatus);
    this.photos = ["assets/images/linguistics.png","assets/images/cooking.png","assets/images/art.png"]
    // this.array=["Ahmed","mohamed","alaa"]
    // this.Categories = [{"image":"assets/images/linguistics.png","name":"Linguistics","allservices":[{"id":1,"name":"English"},{"id":2,"name":"Destush"}]},
    // {"image":"assets/images/cooking.png","name":"Cooking","allservices":[{"id":2,"name":"Healthy Food"},{"id":3,"name":"Sub Desert"}]},
    // {"image":"assets/images/art.png","name":"Art & Media","allservices":[{"id":4,"name":"Photography"},{"id":5,"name":"videography"},{"id":6,"name":"Photoshop"}]}]
  }

}

