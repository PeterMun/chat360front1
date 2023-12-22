import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocketsService } from '../../services/sockets.service';
import { ChatService } from '../../services/chat.service';
import { User } from '../../models/users';
import { UsersService } from '../../services/users.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls:[
    './chat.component.css'
  ]
})
export class ChatComponent implements OnInit, OnDestroy{

  public user?: User;

  text: string = '';
  messagesSubscription: Subscription | any;
  element: HTMLElement | any;

  messages: any[] = [];


  constructor(
    private socketService: SocketsService, 
    public chatService: ChatService,
    private usersService: UsersService
  ){
    this.user = usersService.users;
  }

  ngOnInit(){

    this.element = document.getElementById('chat-messages')

    // this.chatService.sendMessage( 'hello from angular' )
    this.messagesSubscription = this.chatService.getMessage().subscribe( msg => {
      
      this.messages.push(msg);

      setTimeout(() => {
        this.element.scrollTop = this.element.scrollHeight;
      }, 50);
      
    } )
  }

  ngOnDestroy(): void {
      this.messagesSubscription.unsubscribe()
  }

  sendText(){
    console.log(this.text);

    if( this.text.trim().length === 0 ){
      return;
    }
    
    this.chatService.sendMessage( this.text )
    this.text = ''

  }


  


}
