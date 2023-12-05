import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';

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
    name: ['Peter', Validators.required],
    last_name: ['Test1', Validators.required],
    email: [ 'petertest@gmail.com', Validators.required ],
    password: [ '1234567', Validators.required ],
    confirm_password: [ '1234567', Validators.required ],
    terms: [ false, Validators.required ]
  });

  constructor(
    private fb: FormBuilder
  ){}

  createUser(){
    console.log( this.registerForm.value );
    
  }

}
