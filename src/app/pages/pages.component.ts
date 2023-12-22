import { Component, OnInit } from '@angular/core';
import { SocketsService } from '../services/sockets.service';
import { SidebarService } from '../services/sidebar.service';



declare function customInitFunctions(): any;


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: ``
})
export class PagesComponent implements OnInit {

  constructor(
    private sidebarService: SidebarService
  ){

  }

  ngOnInit(): void {
    customInitFunctions();
    this.sidebarService.loadMenu();
    console.log(this.sidebarService.menu);
    

  }


}
