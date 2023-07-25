import { createReducer, on } from '@ngrx/store';
import { CounterState } from './counter.state';
import {
  DECREMENT,
  DECREMENT_BY,
  INCREMENT,
  INCREMENT_BY,
} from './counter.action';

export const initialState: CounterState = {
  count: 0,
};

export const counterReducer = createReducer(
  initialState,
  on(INCREMENT, (state) => ({
    ...state,
    count: state.count + 1,
  })),
  on(DECREMENT, (state) => ({
    ...state,
    count: state.count - 1,
  })),
  on(INCREMENT_BY, (state , {count}) => ({
    ...state,
    count: state.count + count,
  })),
  on(DECREMENT_BY, (state , {count}) => ({
    ...state,
    count: state.count - count,
  }))
);
