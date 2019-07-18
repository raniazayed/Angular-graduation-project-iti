import { Task } from './../../interfaces/task';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-freelancertask',
  templateUrl: './freelancertask.component.html',
  styleUrls: ['./freelancertask.component.scss']
})
export class FreelancertaskComponent implements OnInit {
  task:Task;
  replyAns: {};
  formValue: {};
  taskValue: Object;
  
  constructor(private taskSer:TaskService,private router:Router) { }
  taskForm:FormGroup;
  
  ngOnInit() {
    this.taskSer.getTask().subscribe(data=>{
      this.task = data ;
      console.log(this.task);
      console.log(this.task.servTaskDTO.description)
      // this.taskValue=this.task;
    });
    // console.log(this.task)
    this.taskForm = new FormGroup({
      Description: new FormControl(null,Validators.required)
    })
  }
  
  send(form){
    console.log(form.value);
    console.log(this.task)
    console.log(this.taskForm.get("Description").value);
    this.formValue = {
      "Description":this.taskForm.get("Description").value,
     "freelancerID":this.task.freelancerID,
     "ServeTaskID":this.task.servTaskDTO.serviceId
    }
    console.log(this.formValue)
    this.taskSer.sendReply(this.formValue).subscribe(data=>{
      // this.router.navigate(["/login"])
      console.log(data)
    })
  }
}
