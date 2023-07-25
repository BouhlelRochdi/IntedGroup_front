import { createAction, props } from '@ngrx/store';

export const INCREMENT = createAction('[Counter] Increment');
export const DECREMENT = createAction('[Counter] Decrement');
export const INCREMENT_BY = createAction(
  '[Counter] Increment By',
  props<{ count: number }>()
);
export const DECREMENT_BY = createAction(
  '[Counter] Decrement By',
  props<{ count: number }>()
);
export const SET_COUNT = createAction(
  '[Counter] Set',
  props<{ count: number }>()
);
export const RESET_COUNT = createAction('[Counter] Reset');

export default {
  INCREMENT,
  DECREMENT,
  INCREMENT_BY,
  DECREMENT_BY,
  RESET_COUNT,
  SET_COUNT,
};
