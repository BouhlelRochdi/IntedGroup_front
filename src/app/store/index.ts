export * from './app.state';


import { routerReducer } from '@ngrx/router-store';
import { userReducer } from './userFlow/user.reducer';
import { dialogReducer } from './dialogs/dialogs.reducer';
import { UserEffects } from './userFlow/user.effect';
import { DialogEffects } from './dialogs/dialogs.effect';


export const REDUCERS = {
  router: routerReducer,
  userReducer: userReducer,
  dialogReducer: dialogReducer
};

export const EFFECTS = [UserEffects, DialogEffects];