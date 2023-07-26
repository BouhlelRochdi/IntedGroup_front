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
export class AgentGuard implements CanActivate {
  _store = inject(Store<AppStateInterface>);
  _router = inject(Router);
  isAuthorized: boolean = false;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.checkRole();
  }

  checkRole(): boolean {
    const currentUser = this._store.select(connectedUserSelector).subscribe(
      (user) => {
        if (user && user.role == Roles.AGENT) {
          this.isAuthorized = true;
        }
        else {
          this._router.navigate(['/home']);
          this.isAuthorized = false;
        }
      })
    return this.isAuthorized;
  }

}
