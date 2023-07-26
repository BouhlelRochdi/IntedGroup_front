import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { GLOBAL_SERVICE } from '../constants/tokens.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  _globalService = inject(GLOBAL_SERVICE)
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.checkLogin();
  }

  checkLogin(): boolean {
    const currentAccessToken = this._globalService.currentAccessTokenSubject.value;
    if (currentAccessToken) {
      return true;
    } else {
      this._globalService.logout();
      return false;
    }
  }

}
