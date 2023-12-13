import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { UsersService } from '../services/users.service';
import { inject } from '@angular/core';
import { Observable, tap } from 'rxjs';



export const authGuard: CanActivateFn = 
    ( 
      route: ActivatedRouteSnapshot, 
      state: RouterStateSnapshot 
    ): boolean | Observable<boolean> | Promise<boolean> => {
  console.log('paso por el can activate del guard');

  const userService = inject( UsersService );
  const router = inject( Router );

  return userService.validateToken()
      .pipe(
        tap(isAuthenticated => {
          console.log(!isAuthenticated);
          
          if( !isAuthenticated ){
            router.navigateByUrl('/login');
          }

        } )
      );
      


  return true;
};

