import { Component, OnInit } from '@angular/core';
import { ComplainsService } from 'src/app/services/complains.service';

@Component({
  selector: 'app-complains',
  templateUrl: './complains.component.html',
  styleUrls: ['./complains.component.scss']
})
export class ComplainsComponent implements OnInit {
  complains: Object;

  constructor(private comSer: ComplainsService) { }

  ngOnInit() {

    this.getComplains();
                        
  }

  getComplains()
  {
    this.comSer.getComplains().subscribe(
      data=>{
        this.complains = data ;
        console.log(data)
      }
    );

  }
  check(id,freeID){
    this.comSer.AdminChecked(id,freeID).subscribe(data=>{
      console.log("checked");
      this.getComplains();
    })
  }


}
