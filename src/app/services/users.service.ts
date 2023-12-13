
import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { registerForm } from '../interfaces/register.interface';
import { environment } from '../environments/environment';
import { tap, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from '../models/users';



const base_url = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  public user?: User;


  public users?: User;

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



  getUser(){
    return this.http.get( `${ base_url }/users`, this.headers )
            .pipe(
              map( (resp:any) => {
                console.log(resp.users);
                const users = resp.users;
                return users;
                // const users = resp.users.map( 
                //   //user => new User( user.name,  )  
                // );
                // return {
                //   //total: resp.total,
                //   users
                // };
              })
            )


  }


  createUser( formData: registerForm ){

    return this.http.post( `${ base_url }/login/new`, formData )
        .pipe(
          tap( (resp : any) =>{
            console.log(resp);
            localStorage.setItem('token', resp.token)
            
          } )
        )
    
  }

  validateToken(): Observable<boolean>{
    const token = localStorage.getItem('token') || '';
    return this.http.get( `${ base_url }/login/renew`, {
      headers: {
        'token': token
      }
    } ).pipe(
      tap( (resp: any) => {
        console.log(resp);
        const {
          email,
          last_name,
          name,
          rol,
          uid
        } = resp.user

        this.users = new User(
          name,
          last_name,
          email,
          '',
          rol,
          uid
        );
        

        
        localStorage.setItem('token', resp.token);
      } ),
      map( resp => true ),
      catchError( error => {
        console.log(error);
        return of(false);
        
      })//of(false) )
    )

  }

}
