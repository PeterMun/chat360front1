import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../../services/sidebar.service';
import { User } from '../../models/users';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: ``
})
export class SidebarComponent implements OnInit {

  menuItems: any[];
  public user?: User;

  constructor(
    private sidebarService: SidebarService,
    private usersService: UsersService
  ){
    this.menuItems = sidebarService.menu;
    this.user = usersService.users;

    console.log(this.menuItems);
    
  }

  ngOnInit(): void {
      
  }



}
