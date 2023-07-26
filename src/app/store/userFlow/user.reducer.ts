import { createReducer, on } from '@ngrx/store';
import { UserState } from './user.state';
import { createDemandeSuccess, deleteDemande, deleteDemandeFailure, deleteDemandeSuccess, getAllDemandeByUser, getAllDemandeByUserFailure, getAllDemandeByUserSuccess, getCurrentUser, getCurrentUserFailure, getCurrentUserSuccess, logout, setConnectedUser, setIsAuthenticated, setSelectedDemandeId, updateDemande, updateDemandeFailure, updateDemandeSuccess } from './user.action';


export const initialState: UserState = {
  connectedUser: {},
  isAuthenticated: false,
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

  on(updateDemande, (state, { _id, agentResponse }) => ({
    ...state,
  })),

  on(updateDemandeSuccess, (state, { _id, agentResponse }) => {
    let newArray = [...state?.alldemandes]
    console.log('new array: ', newArray);
    
    const index = newArray.findIndex((item) => item._id === _id);
    console.log('index: ', index);

    newArray[index].agentResponse = agentResponse;
    console.log(' newArray[index]: ',  newArray);

    return {
      ...state,
      alldemandes: newArray
    }
  }),

  on(updateDemandeFailure, (state, { error }) => ({
    ...state,
  })),


  on(createDemandeSuccess, (state, { demande }) => {
    let newArray = [...state?.alldemandes || []]
    newArray.push(demande)
    return {
      ...state,
      alldemandes: newArray
    }
  }),
  // success
  on(getAllDemandeByUserSuccess, (state, { demandes }) => ({
    ...state,
    alldemandes: demandes
  })),
  // failure
  on(getAllDemandeByUserFailure, (state, { error }) => ({
    ...state,
    alldemandes: []
  })),

  on(getCurrentUser, (state) => ({
    ...state,
  })),
  on(getCurrentUserSuccess, (state, { user }) => ({
    ...state,
    connectedUser: user,
    isAuthenticated: true
  })),
  on(getCurrentUserFailure, (state, { error }) => ({
    ...state,
    connectedUser: {},
    isAuthenticated: false
  })),

  on(getAllDemandeByUser, (state) => ({
    ...state,
    alldemandes: state.alldemandes
  })),

  on(setSelectedDemandeId, (state, { demandeId }) => ({
    ...state,
    demandeId: demandeId
  })),

  on(setIsAuthenticated, (state, { isAuthenticated }) => ({
    ...state,
    isAuthenticated: isAuthenticated
  })),

  on(deleteDemande, (state, { demandeId }) => ({
    ...state,
  })),

  on(deleteDemandeSuccess, (state, { demandeId }) => {
    let newArray = [...state?.alldemandes]
    let array = newArray.filter((item) => item._id != demandeId);
    return {
      ...state,
      alldemandes: array
    }
  }),

  on(deleteDemandeFailure, (state, { error }) => ({
    ...state,
  })),

  on(logout, (state) => {
    return initialState
  })
);
