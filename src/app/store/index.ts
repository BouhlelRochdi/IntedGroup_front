export * from './app.state';


import { routerReducer } from '@ngrx/router-store';
import { counterReducer } from './counter/counter.reducer';
import { ActionEffects } from './counter/counter.effect';



export const REDUCERS = {
  router: routerReducer,
  counterReducer: counterReducer
};

export const EFFECTS = [ActionEffects];