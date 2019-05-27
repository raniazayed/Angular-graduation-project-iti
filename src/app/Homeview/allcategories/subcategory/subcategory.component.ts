import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RatedprojectsService } from 'src/app/services/ratedprojects.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss']
})
export class SubcategoryComponent implements OnInit {
  id: number;
  freelancers: Object;

  constructor(private route : ActivatedRoute,private ratedprojser:RatedprojectsService,private router:Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.ratedprojser.getfreelancers(this.id).subscribe(data=>{
      this.freelancers = data;
      console.log(this.freelancers)
    })
  }
  viewProfile(id){
    this.router.navigate([`/freelancerprofile/${id}`])
  }
}
