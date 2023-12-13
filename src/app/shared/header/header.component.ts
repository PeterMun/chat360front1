import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from '../../services/users.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/users';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {

  public user?: User;

  constructor(
    private authService: AuthService,
    private usersService: UsersService
  ){
    this.user = usersService.users;
  }

  logout(){
    this.authService.logout();
  }

}
