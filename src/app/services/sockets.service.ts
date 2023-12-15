import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SocketsService {

  private socket: Socket;

  constructor() {
    this.socket = io(environment.baseUrl);
   }

        // Example method to listen for a specific event
  listen(eventName: string): Observable<any> {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data) => {
        subscriber.next(data);
      });
    });
  }

    // Example method to emit an event
    emit(eventName: string, data: any): void {
      this.socket.emit(eventName, data);
    }



}
