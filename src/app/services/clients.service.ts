import { Injectable, NgZone } from '@angular/core';
import { environment } from '../environments/environment';
import { registerForm } from '../interfaces/register.interface';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { clientForm } from '../interfaces/client.interface';
import { tap } from 'rxjs';

const base_url = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private ngZone: NgZone
  ) { }

  get token(): string {
    return localStorage.getItem( 'token' ) || '';
  }

  get headers(){
    return{
      headers: {
        'token': this.token
      }
    }
  }

  geClient(){
    return this.http.get( `${ base_url }/clients`, this.headers )
    .pipe(
      map( (resp:any) => {
        console.log(resp.clients);
        const clients = resp.clients;
        return clients;
        
      })
    )
  }

  createClient( formData: clientForm ){
    return this.http.post( `${ base_url }/clients`, formData )
            .pipe(
              tap( ( resp: any ) => {
                console.log(resp);
              } )
            )
  }

  updateClient(
    cid: string,
    fullname: string,
    email: string,
    password: string,
    phone: string,
    status: string
  ){
    return this.http.put( `${ base_url }/clients/${ cid }`, {
      cid,
      fullname,
      email,
      password,
      phone,
      status
    }, this.headers )
    .pipe(
      tap( ( resp: any ) => {
        console.log(resp);
      } )
    )

  }




}

