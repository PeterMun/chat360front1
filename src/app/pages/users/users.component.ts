import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import Swal from 'sweetalert2';
import { User } from '../../models/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: ``
})
export class UsersComponent {

  public formSubmitted = false;
  public users: User[] = [];

  public registerForm: FormGroup =  this.fb.group({
    name: ['', Validators.required],
    last_name: ['', Validators.required],
    email: [ '', [ Validators.required, Validators.email ] ],
    password: [ '', Validators.required ],
    rol: ['', Validators.required]
  });


  

  constructor(
    private fb: FormBuilder,
    private userService: UsersService
  ){
    this.getUsers()
  }


  createUser(){
    this.formSubmitted = true;
    console.log( this.registerForm.value );
    // if( this.registerForm.valid ){
    //   return;
    //   // console.log('posteando form');
    // }

    this.userService.createUser( this.registerForm.value )
      .subscribe( resp => {
        console.log('usuario creado');
        console.log(resp);
        
      }, (err) => {
        //console.warn(err.error.msg)
        Swal.fire('Error', err.error.msg, 'error')
        
      }
      );
    
  }

  getUsers(){
    this.userService.getUser()
        .subscribe( (users) =>{
          this.users = users;
          console.log(this.users);
        } )
  }


}
