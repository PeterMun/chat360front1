import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { environment } from '../environments/environment';
import { fromEvent, Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketsService {

  private socket: Socket;


  public socketStatus = false;

  constructor() {
    this.socket = io(environment.socketUrl);
    this.checkStatus();
   }

    //  // Example method to listen for a specific event
    //  listen(eventName: string): Observable<any> {
    //   return new Observable((subscriber) => {
    //     this.socket.on(eventName, (data) => {
    //       subscriber.next(data);
    //     });
    //   });
    // }
  
    // // Example method to emit an event
    // emit(eventName: string, data: any): void {
    //   this.socket.emit(eventName, data);
    // }
  

    checkStatus(){
      this.socket.on( 'connect', () => {
        console.log('Connected to the server');
        this.socketStatus = true;
        
      } );

      this.socket.on( 'disconnect', () => {
        console.log('Disconnected to the server');
        this.socketStatus = false;
      } );
    }
    // mandar el token
    emit( event: string, payload?: any, callback?: Function ){
      console.log( 'emitiendo', event);
      console.log('payload', payload);
      
      this.socket.emit( event, payload, callback )
    }

    listen( event: string ){

      return new Observable( (Subscriber) => {
        this.socket.on( event, (data: any) =>{
          Subscriber.next(data)
        } )
      } )


    }


}
