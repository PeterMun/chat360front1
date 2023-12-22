import { Injectable } from '@angular/core';
import { SocketsService } from './sockets.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    public socketsService: SocketsService
  ) { }

  sendMessage( message: string ){

    const payload = {
      from: 'Peter',
      body: message
    };

    this.socketsService.emit( 'message', payload );

  }

  getMessage(){
    return this.socketsService.listen('new-message');
  }

}
