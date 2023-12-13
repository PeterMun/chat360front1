import { Component, OnInit, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { loginForm } from '../../interfaces/login.interface';
import { UsersService } from '../../services/users.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css'
  ]
})
export class LoginComponent implements OnInit{

  public formSubmitted = false;

  public loginForm: FormGroup =  this.fb.group({
    email: [ localStorage.getItem('email') || '', [ Validators.required, Validators.email ] ],
    password: [ '', Validators.required ],
    remember: [false]

  });


  constructor(
    private router: Router,
    private fb: FormBuilder,
    private ngZone: NgZone,
    private authService: AuthService 
  ){
   
  }


  ngOnInit(): void {
  }

  login(  ){
    // console.log(this.loginForm.value);
    this.authService.login( this.loginForm.value )
      .subscribe( resp => {
        console.log('login user');
        console.log(resp);
        localStorage.setItem('uid', resp.uid);
        if( this.loginForm.get('remember')?.value ){
          localStorage.setItem('email', this.loginForm.get('email')?.value)
          this.router.navigateByUrl('/');
        }else{
          localStorage.removeItem('email')
          this.router.navigateByUrl('/');
        }
        
        // this.router.navigateByUrl('/');
        
      }, (err) => {
        //console.warn(err.error.msg)
        Swal.fire('Error', err.error.msg, 'error')
        
      }
      );
  }


}
