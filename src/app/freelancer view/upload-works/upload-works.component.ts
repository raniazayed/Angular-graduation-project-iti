import { UploadFilesService } from './../../services/upload-files.service';
import { UploadfilesService } from './../../services/uploadfiles.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpEventType, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload-works',
  templateUrl: './upload-works.component.html',
  styleUrls: ['./upload-works.component.scss']
})
export class UploadWorksComponent implements OnInit {
  selectedFile: File;
  imageUrl: any;
  formValue: {};
  works=[]
  // http: any;
  progress: number;
  message: string;
  onUploadFinished: any;
  allfiles: any;
  // imageUrl:any= "assets/images/user.png";
  constructor(private uploadFileSer:UploadfilesService,private uploaprojser:UploadFilesService) { }
  uploadForm:FormGroup;
  ngOnInit() {
    this.uploadForm = new FormGroup({
      Description: new FormControl('',[Validators.required]),
      uploadFile: new FormControl('',[Validators.required]),
      projectName: new FormControl('',[Validators.required])
    });
  }
  
//  UPLOAD FILES
// public createImgPath = (serverPath: string) => {
//   return `https://localhost:5001/${serverPath}`;
// }

uploadFile(files){
  this.allfiles=files;
  console.log(this.allfiles)
}
  get Description(){
    return this.uploadForm.get("Description");
  }
  get projectName(){
    return this.uploadForm.get("projectName");
  }
  onBasicUpload(file: FileList){
   
    this.selectedFile = file.item(0);
    console.log(this.selectedFile)
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
      this.works.push(this.imageUrl)
    }
    reader.readAsDataURL(this.selectedFile)
    console.log(this.works)
  }
  onSubmit(form: FormGroup) {
    console.log(this.allfiles)
    this.uploaprojser.uploadFile(this.allfiles);
    console.log( this.uploaprojser.uploadFile(this.allfiles))
    console.log(form.value);
    this.formValue={
      "Description":form.value.Description,
      "uploadFile": this.works
    }
    console.log('Valid?', form.valid); // true or false
    console.log('Description', form.value.Description);
    console.log('uploadFile', form.value.uploadFile);
    console.log(this.formValue)
    this.uploadFileSer.uploadWorks(this.formValue).subscribe(data=>{
      console.log("success")
    })
  }
}
