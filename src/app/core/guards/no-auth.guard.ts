import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStateInterface } from 'src/app/store';
import { connectedUserSelector } from 'src/app/store/userFlow/user.selector';
import { Roles } from '../constants/enums';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
  _store = inject(Store<AppStateInterface>);
  _router = inject(Router);
  isAuthorized: boolean = false;

  constructor() {
    this._store.select(connectedUserSelector).subscribe(
      (user) => {
        if (!user) {
          this.isAuthorized = true;
        }
        else {
          this.isAuthorized = false;
        }
      })
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.isAuthorized) {
      this._router.navigate(['/home']);
      return false
    }
    else {
      return true;
    }
  }

  checkAuthentication(): boolean {
    return this.isAuthorized;
  }

}
