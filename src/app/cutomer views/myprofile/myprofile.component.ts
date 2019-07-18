
import { Component, OnInit } from '@angular/core';
import { EditProfileComponent } from 'src/app/freelancer view/edit-profile/edit-profile.component';
import { EditprofileService } from 'src/app/services/editprofile.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {
  formValue: Object;

    constructor(private editSer:EditprofileService){}
    ngOnInit(){
      // this.editSer.CustomerProfile().subscribe(data=>{
      //   this.formValue = data ;
      // })
    }
    
}
