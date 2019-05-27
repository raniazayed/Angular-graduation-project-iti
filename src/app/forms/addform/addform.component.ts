import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.scss']
})
export class AddformComponent implements OnInit {
  flag1: string;
  flag2: string;

 ngOnInit(){
   this.flag1="freelancer";
   this.flag2="customer"
 }

}
