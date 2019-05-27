import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UploadimgService {
  imageUrl: any;
    // UPLOAD IMG ON FIREBASE
  constructor(private http: HttpClient, private afstorage: AngularFireStorage) { }
  storageRef: AngularFireStorageReference;
  uploadImage: AngularFireUploadTask;
  downloadURL: Observable<string>
   async upload(fileToUpload: File) : Promise<any> {
    var filename = fileToUpload.name;
    this.storageRef = this.afstorage.ref('/formImages/' + filename);
    this.storageRef.put(fileToUpload).then(function (result) {
      console.log(result)
    })
    this.downloadURL = this.storageRef.getDownloadURL();
    console.log(this.downloadURL)
  const url =    await this.downloadURL.toPromise();
  this.imageUrl =   url;
      // debugger;
     
      console.log(this.imageUrl)
      return this.imageUrl;
  //  subscribe(url => {
  //    this.imageUrl =   url;
  //    debugger;
     
  //     console.log(this.imageUrl)
  //     return url;
  //   });
  }
}
