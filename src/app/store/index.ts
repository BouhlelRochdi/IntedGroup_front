export * from './app.state';


import { routerReducer } from '@ngrx/router-store';
import { counterReducer } from './counter/counter.reducer';
import { ActionEffects } from './counter/counter.effect';
import { userReducer } from './userFlow/user.reducer';
import { dialogReducer } from './dialogs/dialogs.reducer';



export const REDUCERS = {
  router: routerReducer,
  counterReducer: counterReducer,
  userReducer: userReducer,
  dialogReducer: dialogReducer
};

export const EFFECTS = [ActionEffects];