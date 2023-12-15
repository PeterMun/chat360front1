import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2'; 
import { UsersService } from '../../services/users.service';
import Swal from 'sweetalert2';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    './register.component.css'
  ]
})
export class RegisterComponent {

  public formSubmitted = false;

  public registerForm =  this.fb.group({
    // name: ['', Validators.required],
    // last_name: ['', Validators.required],
    fullname: ['', Validators.required],
    email: [ '', [ Validators.required, Validators.email ] ],
    password: [ '', Validators.required ],
    confirm_password: [ '', Validators.required ],
    terms: [ false, Validators.required ],
    rol: ['ADMIN']
  }, {
    validators: this.equalsPasswords('password','confirm_password')
  });

  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    private router: Router
  ){}

  createUser(){
    this.formSubmitted = true;
    console.log( this.registerForm.value );
    // if( this.registerForm.valid ){
    //   return;
    //   // console.log('posteando form');
    // }

    this.userService.createUser( this.registerForm.value )
      .subscribe( resp => {
        // console.log('usuario creado');
        // console.log(resp);
        this.router.navigateByUrl('/')
      }, (err) => {
        //console.warn(err.error.msg)
        Swal.fire('Error', err.error.msg, 'error')
        
      }
      );
    
  }

  nonValidField( field: string ): boolean{
    if( this.registerForm.get(field)?.invalid && this.formSubmitted ){
      return true;
    }else{
      return false;
    }
  }

  noValidPasswords(){
    const pass1 = this.registerForm.get('password')?.value;
    const pass2 = this.registerForm.get('confirm_password')?.value;
  
    if( (pass1 !== pass2) && this.formSubmitted ){
      return true;
    }else{
      return false;
    }
  
  }

  acceptedTerms(){
    return !this.registerForm.get('terms')?.value && this.formSubmitted; 
  }

  equalsPasswords( pass1: string, pass2: string ){
    return ( formGroup: FormGroup ) =>{
      const pass1Control =  formGroup.get(pass1);
      const pass2Control =  formGroup.get(pass2);
      if( pass1Control?.value === pass2Control?.value ){
        pass2Control?.setErrors(null);

      }else{
        pass2Control?.setErrors({
          notEqual: true
        })
      }
    }
  }

}
