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
    //remember: [false],
    ip: ['2.2.2.2']

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
        console.log(resp.body.userData);
        
        localStorage.setItem('uid', resp.body.userData.id);
        if( this.loginForm.get('remember')?.value ){
          localStorage.setItem('email', this.loginForm.get('email')?.value)
          // this.router.navigateByUrl('/');
        }else{
          localStorage.removeItem('email')
        }
        
        this.router.navigateByUrl('/');
        
      }, (err) => {
        Swal.fire('Error', err.error.msg, 'error')
        
      }
      );
  }

  nonValidField( field: string ): boolean{
    if( this.loginForm.get(field)?.value && this.formSubmitted ){
      return true;
    }else{
      return false;
    }
  }


}
