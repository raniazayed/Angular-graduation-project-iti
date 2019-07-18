import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss']
})
export class PendingComponent implements OnInit {
  unveriviedUser: string;
  message: any;

  constructor(private  router:Router) { }

  ngOnInit() {
   this.unveriviedUser = localStorage.getItem("msg")
    if(this.unveriviedUser){
      this.message=JSON.parse(localStorage.getItem("currentUser")).token
    }
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
