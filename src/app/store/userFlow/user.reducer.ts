import { createReducer, on } from '@ngrx/store';
import { UserState } from './user.state';
import { getAllDemandeByUser, logout, setConnectedUser, updateDemande } from './user.action';


export const initialState: UserState = {
  connectedUser: {},
  demande: {},
  alldemandes: []
};

export const userReducer = createReducer(
  initialState,
  on(setConnectedUser, (state, { user }) => ({
    ...state,
    connectedUser: user
  })),

  on(updateDemande, (state, { demande }) => ({
    ...state,
    connectedUser: {
      ...state.connectedUser,
      demande
    }
  })),

  on(getAllDemandeByUser, (state) => ({
    ...state,
    alldemandes: state.alldemandes
  })),


  on(logout, (state) => {
    return initialState
  })
);
