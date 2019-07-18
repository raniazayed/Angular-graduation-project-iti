import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  gohome(){
    if(localStorage.getItem("currentUser")){
      if(JSON.parse(localStorage.getItem("currentUser")).roleName=="customer"){
        this.router.navigate(["/customer/home"])
      }else if(JSON.parse(localStorage.getItem("currentUser")).roleName=="freelancer"){
        this.router.navigate(["/freelancer/freelancerhome"])
      }else if((JSON.parse(localStorage.getItem("currentUser")).roleName=="admin")){
        this.router.navigate(["/admin/statistics"])
      }
    }else{
      this.router.navigate([""])

    }
  }
}
