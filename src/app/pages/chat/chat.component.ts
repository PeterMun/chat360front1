import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocketsService } from '../../services/sockets.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls:[
    './chat.component.css'
  ]
})
export class ChatComponent implements OnInit{

  

  constructor(
    private socketService: SocketsService
  ){
 
  }

  ngOnInit(){
    this.socketService.listen('message').subscribe((data) => {
      console.log('Received message:', data);
    });
    
  }

  


}
