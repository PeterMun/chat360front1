import { Component, OnInit } from '@angular/core';
import { SocketsService } from '../services/sockets.service';



declare function customInitFunctions(): any;


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: ``
})
export class PagesComponent implements OnInit {

  constructor(
    
  ){

  }

  ngOnInit(): void {
      customInitFunctions();

  }


}
