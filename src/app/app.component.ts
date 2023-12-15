import { Component, OnInit } from '@angular/core';
import { SocketsService } from './services/sockets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  constructor(
    private socketService: SocketsService
  ){}

  ngOnInit(): void {
    this.socketService.listen('message').subscribe((data) => {
      console.log('Received message:', data);
    });
  }


}
