import { isPlatformBrowser } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, switchMap, of, catchError } from 'rxjs';
import * as _userAction from './user.action';
import { GLOBAL_SERVICE } from 'src/app/core/constants/tokens.constants';
import { DemandeDto } from 'src/app/core/dtos/demande.dto';



@Injectable()
export class UserEffects {
  action$ = inject(Actions);
  _globalService = inject(GLOBAL_SERVICE);

  // constructor(private actions$: Actions) {}

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
      mergeMap(({ demande }) =>
        this._globalService.updateDemande(demande as DemandeDto).pipe(
          switchMap((res: DemandeDto) => {
            if (!res) {
              return of(_userAction.updateDemandeFailure({ error: 'error' }));
            }
            else {
              return of(_userAction.updateDemandeSuccess({ demande: res }));
            }
          }
          )
        )
      )
    )
  );

  // get all demande by user
  getAllDemandeByUser = createEffect(() =>
    this.action$.pipe(
      ofType(_userAction.getAllDemandeByUser),
      mergeMap(() =>
        this._globalService.getDemandeDetails().pipe(
          switchMap((res: DemandeDto[]) => {
            if (!res) {
              return of(_userAction.getAllDemandeByUserFailure({ error: 'error' }));
            }
            else {
              return of(_userAction.getAllDemandeByUserSuccess({ demandes: res }));
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


