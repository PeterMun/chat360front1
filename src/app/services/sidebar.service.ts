import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public menu: any[] = [];

  loadMenu(){
    this.menu = JSON.parse(localStorage.getItem('menu') || '') || []; 
  }

  // menu: any[] = [
  //   {
  //     title: 'Dashboard',
  //     icon: 'ti ti-dashboard',
  //     url: '/'
  //   },
  //   {
  //     title: 'Users',
  //     icon: 'ti ti-user',
  //     url: 'users'
  //   },
  //   {
  //     title: 'Clients',
  //     icon: 'ti ti-mail',
  //     url: 'clients'
  //   },
  //   {
  //     title: 'Chat',
  //     icon: 'ti ti-messages',
  //     url: 'chat'
  //   },
  //   {
  //     title: 'Client-Chat',
  //     icon: 'ti ti-messages',
  //     url: 'chatClient'
  //   },


  // ];




}
