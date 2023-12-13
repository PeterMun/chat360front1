import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'ti ti-dashboard',
      url: '/'
    },
    {
      title: 'Users',
      icon: 'ti ti-user',
      url: 'users'
    },
    {
      title: 'Clients',
      icon: 'ti ti-mail',
      url: 'clients'
    },
    {
      title: 'Chat',
      icon: 'ti ti-messages',
      url: 'chat'
    },
    // {
    //   title: 'Calendar',
    //   icon: 'ti ti-calendar',
    //   url: ''
    // },


  ];

  constructor() { }



}
