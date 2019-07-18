import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router, private dialogRef:MatDialogRef<LogoutComponent>,) { }

  ngOnInit() {
    
  }
  onlogout(){
    localStorage.removeItem('currentUser');
    this.router.navigate([""]);
    this.closeModal()
  }
  closeModal(){
    
    this.dialogRef.close('Pizza!');

  }
}
