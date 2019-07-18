import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RatedprojectsService } from 'src/app/services/ratedprojects.service';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss'],
  providers:[NgbRatingConfig]
})
export class SubcategoryComponent implements OnInit {
  id: number;
  freelancers: Object;
  services: Object;

  constructor(private route : ActivatedRoute,private ratedprojser:RatedprojectsService,private router:Router,config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
   }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.ratedprojser.getfreelancers(this.id).subscribe(data=>{
      this.freelancers = data;
      console.log(this.freelancers)
    });
    this.ratedprojser.getservicebyID(this.id).subscribe(a=>{
      this.services=a;
      console.log(this.services)
  });

    // this.subCategories = {"image":"assets/images/cookingsub.png","name":"Linguistics","allservices":[{"id":1,"fName":"Ahmed ","lName":"zayed","totalrate":4,"photo":"assets/images/freelancer.png"},{"id":2,"fName":"Ahmed ","lName":"zayed","totalrate":3,"photo":"assets/images/freelancer.png"}]}
    
  }
  viewProfile(id){
    this.router.navigate([`/customer/freelancerprofile/${id}`])
  }
}
