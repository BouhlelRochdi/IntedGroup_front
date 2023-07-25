import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from './counter.state';

export const CounterFeatureSelector =
  createFeatureSelector<CounterState>('counterReducer');

export const count$$ = createSelector(CounterFeatureSelector, (c) => c.count);
