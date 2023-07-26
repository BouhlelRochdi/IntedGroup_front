import { isPlatformBrowser } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, switchMap, of, catchError } from 'rxjs';
import * as _userAction from './user.action';
import { GLOBAL_SERVICE } from 'src/app/core/constants/tokens.constants';
import { DemandeDto } from 'src/app/core/dtos/demande.dto';
import { Router } from '@angular/router';



@Injectable()
export class UserEffects {
  action$ = inject(Actions);
  _router = inject(Router)
  _globalService = inject(GLOBAL_SERVICE);

  // constructor(private actions$: Actions) {}

  getConnectedUser = createEffect(() =>
    this.action$.pipe(
      ofType(_userAction.getCurrentUser),
      mergeMap(() =>
        this._globalService.getCurrentUser().pipe(
          switchMap((res: any) => {
            if (!res) {
              return of(_userAction.getCurrentUserFailure({ error: 'error' }));
            }
            else {
              return of(_userAction.getCurrentUserSuccess({ user: res.data }));
            }
          }
          )
        )
      )
    )
  );

  createDemande = createEffect(() =>
    this.action$.pipe(
      ofType(_userAction.createDemande),
      mergeMap(({ demande }) =>
        this._globalService.createDemande(demande as DemandeDto).pipe(
          switchMap((res: DemandeDto) => {
            if (!res) {
              return of(_userAction.createDemandeFailure({ error: 'error' }));
            }
            else {
              this._router.navigate(['/home/user-interface']);
              return of(_userAction.createDemandeSuccess({ demande: res }));
            }
          }
          )
        )
      )
    )
  );

  updateDemande = createEffect(() =>
    this.action$.pipe(
      ofType(_userAction.updateDemande),
      mergeMap(({ _id, agentResponse }) =>
        this._globalService.updateDemande( _id, agentResponse).pipe(
          switchMap((res: DemandeDto) => {
            if (!res) {
              return of(_userAction.updateDemandeFailure({ error: 'error' }));
            }
            else {
              return of(_userAction.updateDemandeSuccess({ _id: _id, agentResponse: agentResponse }));
            }
          }
          )
        )
      )
    )
  );

  deleteDemande = createEffect(() =>
  this.action$.pipe(
    ofType(_userAction.deleteDemande),
    mergeMap(({ demandeId }) =>
      this._globalService.deleteDemande(demandeId).pipe(
        switchMap((res) => {
          if (!res) {
            return of(_userAction.deleteDemandeFailure({ error: 'error' }));
          }
          else {
            return of(_userAction.deleteDemandeSuccess({ demandeId: demandeId }));
          }
        }
        )
      )
    )
  )
);

  getAllDemandeByUser = createEffect(() =>
    this.action$.pipe(
      ofType(_userAction.getAllDemandeByUser),
      mergeMap(() =>
        this._globalService.getDemandeByUser().pipe(
          switchMap((res: any) => {
            if (!res) {
              return of(_userAction.getAllDemandeByUserFailure({ error: 'error' }));
            }
            else {
              return of(_userAction.getAllDemandeByUserSuccess({ demandes: res.data }));
            }
          }
          )
        )
      )
    )
  );



  //   GetUserInfo = createEffect(
  //     () => {
  //       return this.actions$.pipe(
  //         ofType(_userAction.tokenPersist),
  //         mergeMap(() => {
  //           console.log('tokenPersist');

  //           this._general.getUserInfo();
  //           return of()
  //         })
  //       );
  //     },
  //     { dispatch: false }
  //   );
}


