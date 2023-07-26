import { createReducer, on } from '@ngrx/store';
import { UserState } from './user.state';
import { getAllDemandeByUser, logout, setConnectedUser, setSelectedDemandeId, updateDemande } from './user.action';


export const initialState: UserState = {
  connectedUser: {},
  demande: {},
  demandeId: '',
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

  on(setSelectedDemandeId, (state, { demandeId }) => ({
    ...state,
    demandeId: demandeId
  })),

  on(logout, (state) => {
    return initialState
  })
);
