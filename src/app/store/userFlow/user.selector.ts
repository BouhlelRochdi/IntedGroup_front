import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.state';

export const UserFeatureSelector =
  createFeatureSelector<UserState>('userReducer');

export const connectedUserSelector = createSelector(UserFeatureSelector, (c) => c.connectedUser);
