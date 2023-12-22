import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { registerForm } from '../../interfaces/register.interface';
import Swal from 'sweetalert2';
import { ClientsService } from '../../services/clients.service';
import { Client } from '../../models/client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styles: ``
})
export class ClientsComponent {

  public formSubmitted = false;
  public clients: Client[] = [];

  
  public clientForm: FormGroup =  this.fb.group({
    // name: ['', Validators.required],
    // last_name: ['', Validators.required],
    fullname: ['', Validators.required],
    phone: ['', Validators.required], 
    email: [ '', [ Validators.required, Validators.email ] ],
    password: [ '', Validators.required ],
    user: [ localStorage.getItem('uid') ]
  });

  constructor(
    private fb: FormBuilder,
    private clientService: ClientsService
  ){
    this.getClients()
  }

  getClients(){
    this.clientService.geClient()
    .subscribe( (clients) =>{
      this.clients = clients;
      console.log(this.clients);
    } )
  }

  createClient(){
    this.formSubmitted = true;
    console.log( this.clientForm.value );
    this.clientService.createClient( this.clientForm.value )
        .subscribe( resp => {
          console.log('created user');
          console.log(resp);
          window.location.reload();
           
        }, ( err ) => {
          Swal.fire('Error', err.error.msg, 'error')
        } )
  }

  updateClient( client: Client ){
    console.log(client.cid);
    console.log(client.fullname);
    console.log(client.user);
    
    this.clientService.updateClient(
      client.cid as string,
      client.fullname,
      client.email,
      client.password as string,
      client.phone as string,
      client.status as string
    )
      .subscribe( resp => {
        Swal.fire('Updated', client.fullname, 'success')
      } )
    

  }





}
