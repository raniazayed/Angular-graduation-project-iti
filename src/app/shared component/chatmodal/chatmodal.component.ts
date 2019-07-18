import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerrequestsService } from 'src/app/services/customerrequests.service';
import { ChatIds } from './../../interfaces/chat-ids';
import { OnInit, Inject } from '@angular/core';
import { Component } from '@angular/core';import * as signalR from "@aspnet/signalr";
import {Message} from '../../interfaces/message'
import{Id} from '../..//interfaces/id'
import{ChatingService} from '../../services/chating.service';
import { MatDialogRef } from '@angular/material';
import { RateComponent } from 'src/app/modals/rate/rate.component';
import { Ids } from 'src/app/interfaces/ids';
import { start } from 'repl';
@Component({
  selector: 'app-chatmodal',
  templateUrl: './chatmodal.component.html',
  styleUrls: ['./chatmodal.component.scss']
})
export class ChatmodalComponent implements OnInit {
  public connection;
  message = '';
  messages: Message[];
  id:Id;
  btnflag:boolean=true;
  sender:number;
  reciever:number;
  flag:boolean=true;
  // chatids.ids:ChatIds
  Ids: Ids;
  chat: object;
  constructor(private chatser:ChatingService,@Inject(MAT_DIALOG_DATA) private chatids:ChatIds, private dialogRef:MatDialogRef<ChatmodalComponent>,private customerreqser:CustomerrequestsService) {
    console.log(chatids)
    //console.log(chatids.ids);
    console.log(chatids.custID);
    
  }
  
  ngOnInit() {
    this.id = new Id();
    this.start()
    if(JSON.parse(localStorage.getItem("currentUser")).roleName=="customer"){
      this.sender=this.id.SenderId=this.chatids.custID;
      this.reciever= this.id.ReceiverId=this.chatids.freelancerID;
      console.log(this.sender)
    }else{
      this.sender=this.id.SenderId=this.chatids.freelancerID;
      this.reciever= this.id.ReceiverId=this.chatids.custID;
    }
    // console.log(JSON.parse(localStorage.getItem("currentUser")).roleName);
    
    
  this.connection=new signalR.HubConnectionBuilder().withUrl('http://192.168.43.180:2090/chat').configureLogging(signalR.LogLevel.Information)
  .build();

    this.connection
      .start()
      .then(() => console.log('Connection started!'))
      .catch(err => console.log('Error while establishing connection :('));

    
      this.connection.on('LoadMsgs',()=>{
        this.load();
       
       });
        
       this.connection.on('Closed',()=>{
        this.btnflag=false;
        console.log(this.btnflag);
       });this.connection.on('OtherClosed',()=>{
        window.confirm("the other partner are not connected");
       });


    }
    public start(): void{
      console.log("in");
      this.flag=false;
      console.log(this.id);
      this.load()  ;
     
     this.connection
      .invoke('saveConnectionId', this.id.SenderId).catch(err => console.error(err))
    }
    public close(): void{
      console.log("out");
      this.flag=true;
     this.connection
      .invoke('CloseConnection',this.id.SenderId,this.id.ReceiverId).catch(err => console.error(err))
    }
     public sendMessage(): void {
    this.connection
      .invoke('sendTo', this.id.SenderId,this.message,this.id.ReceiverId)
      .catch(err => console.error(err));
  }

  public load() :void
  {
    
    
    this.chatser.getAll(this.id).subscribe(
      m=>{this.messages=m;
      console.log(this.messages);}
    )
    }
    // this.dialogRef.close('Pizza!');


}
