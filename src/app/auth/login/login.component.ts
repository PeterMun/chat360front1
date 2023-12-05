import { Component, OnInit, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css'
  ]
})
export class LoginComponent implements OnInit{



  //public auth: AuthLogin


  constructor(
    private router: Router,
    private fb: FormBuilder,
    private ngZone: NgZone
  ){
   
  }


  ngOnInit(): void {
  }

  login(){
    this.router.navigateByUrl('/');
    
  }


}
