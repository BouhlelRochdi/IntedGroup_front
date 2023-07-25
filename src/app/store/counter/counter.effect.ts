import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';


@Injectable()
export class ActionEffects {

  constructor(private actions$: Actions) {}

//   SignIn = createEffect(() =>
//     this.actions$.pipe(
//       ofType(_userAction.signIn),
//       mergeMap(({ signInForm }) =>
//         this._authService.signin(signInForm as LoginReqDTO).pipe(
//           switchMap((res: LoginResDTO) => {
//             if (isPlatformBrowser(this.platformId)) {
//             storageSetItem(KEYS.ACCESS_TOKEN, res.data.access_token);
//             storageSetItem(KEYS.REFRESH_TOKEN, res.data.refresh_token);
//             storageSetItem(KEYS.USER_ID, res.data.user._id);
//             this._translate
//               .get('AUTH_FEATURES.SIGNIN.SIGN_IN_SUCCESS')
//               .subscribe((message: string) => {
//                 this._toastr.add({
//                   severity: 'success',
//                   summary: 'Success',
//                   detail: message,
//                 });
//               })
//               .unsubscribe();
//             return of(
//               _userAction.signInSuccess({
//                 user: res.data.user,
//                 access_token: res.data.access_token,
//                 refresh_token: res.data.refresh_token,
//               }),
//               REDIRECT({ path: '/' })
//             );
//           }
//           else{
//             return of()
//           }
//           }),
//           catchError((err) => {
//             this._toastr.add({
//               severity: 'error',
//               summary: 'Success',
//               detail: err.error.message,
//             });
//             return of(_userAction.signInFailure({ error: err }));
//           })
//         )
//       )
//     )
//   );



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


