import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadFilesService {
  progress: number;
  message: string;
  onUploadFinished: any;

  constructor(private http:HttpClient) { }
  public uploadFile = (files) => {
    if (files.length === 0) {
      return;
    }
   
    let filesToUpload : File[] = files;
    const formData = new FormData();
      
    Array.from(filesToUpload).map((file, index) => {
      console.log(file)
      return formData.append('file'+index, file, file.name);
    });
   
    // this.http.post('http://192.168.137.192/api/portfolio', formData, {reportProgress: true, observe: 'events'})
    //   .subscribe(event => {
    //     console.log(event)
    //     if (event.type === HttpEventType.UploadProgress)
    //       this.progress = Math.round(100 * event.loaded / event.total);
    //     else if (event.type === HttpEventType.Response) {
    //       this.message = 'Upload success.';
    //       this.onUploadFinished.emit(event.body);
    //     }
    //   });
  }
}
