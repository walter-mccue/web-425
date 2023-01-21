/**
 * Title: signin.guard.ts
 * Author: Walter McCue
 * Date: 01/21/23
 * Description: app guarding for the enhanced-secured-profile-app project
*/

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class SigninGuard implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let isLoggedIn = route.queryParams['isLoggedIn'];

      if(isLoggedIn) {
        return true;
      } else {
        this.router.navigate(['/']);
        return false;
      }

  }

}
