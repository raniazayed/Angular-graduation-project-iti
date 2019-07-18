import { VerifyTasksService } from './../../services/verify-tasks.service';
import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor(private taskService:VerifyTasksService, public dialog: MatDialog) { }

  ngOnInit() {
    // this.getUnVerifiedTasks();
    this.taskService.getunverfied();

  }
  validate(id,freelancerId){
      this.taskService.ValidateTask(id,freelancerId).subscribe(data=>{
        console.log("validate");
        // this.getssn();
        this.taskService.getunverfied();
    
      })
    }
    // DECLINE 
    Decline(id,freelancerId){
      this.taskService.DeclineTask(id,freelancerId).subscribe(data=>{
        console.log("declined")
      })
    }
  // getUnVerifiedTasks(){
  //   this.taskService.getUnVerifiedTasks().subscribe(data=>{

  //   }
  //   );
  // }
  // openDialog(id): void {

  //       const dialogRef = this.dialog.open(VerifyfreelancerTaskComponent, {
  //         width: '600px',
  //         data: id
  //       });
       
    

  // }
}
