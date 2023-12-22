import { Injectable, NgZone } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { tap } from 'rxjs';
import { loginForm } from '../interfaces/login.interface';

const base_url = environment.baseUrl_;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //public user: User;

  constructor(
    private http: HttpClient,
    private router: Router,
    private ngZone: NgZone
  ) { }


  login( formData: loginForm ){
    return this.http.post( `${ base_url }/login`, formData )
      .pipe(
        tap( (resp : any) =>{
          console.log(resp);
          localStorage.setItem('token', resp.body.accessToken)
          // localStorage.setItem('menu', resp.menu)
        } )
      )
  
  }

  logout(){
    localStorage.removeItem('token');
    // delete routes
    this.router.navigateByUrl('/login')

  }






}
