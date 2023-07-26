import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.state';

export const UserFeatureSelector =
  createFeatureSelector<UserState>('userReducer');

export const connectedUserSelector = createSelector(UserFeatureSelector, (c) => c.connectedUser);
export const demandeSelector = createSelector(UserFeatureSelector, (c) => c.demande);
export const demandeIdSelector = createSelector(UserFeatureSelector, (c) => c.demandeId);
export const alldemandesSelector = createSelector(UserFeatureSelector, (c) => c.alldemandes);
