import { createAction, props } from '@ngrx/store';
import { DemandeDto } from 'src/app/core/dtos/demande.dto';
import { LoginDto } from 'src/app/core/dtos/login.dto';

export const setConnectedUser = createAction('[User] Set Connected User',
  props<{ user: LoginDto }>());

// set isAuthenticated
export const setIsAuthenticated = createAction('[User] Set Is Authenticated',
  props<{ isAuthenticated: boolean }>());

// get current User
export const getCurrentUser = createAction('[User] Get Current User');  
export const getCurrentUserSuccess = createAction('[User] Get Current User Success',
  props<{ user: LoginDto }>()
);
export const getCurrentUserFailure = createAction('[User] Get Current User Failure',
  props<{ error: any }>()
);

// createDemande 
export const createDemande = createAction('[User] Create Demande',
  props<{ demande: DemandeDto }>());

export const createDemandeSuccess = createAction('[User] Create Demande Success',
  props<{ demande: DemandeDto }>()
);
export const createDemandeFailure = createAction('[User] Create Demande Failure',
  props<{ error: any }>()
);

// updateDemande
export const updateDemande = createAction('[User] Update Demande',
  props<{ _id: string, agentResponse: string }>());

export const updateDemandeSuccess = createAction('[User] Update Demande Success',
  props<{ _id: string, agentResponse: string }>()
);
export const updateDemandeFailure = createAction('[User] Update Demande Failure',
  props<{ error: any }>()
);

// get all demande by user
export const getAllDemandeByUser = createAction('[User] Get All Demande By User');

export const getAllDemandeByUserSuccess = createAction('[User] Get All Demande By User Success',
  props<{ demandes: DemandeDto[] }>()
);
export const getAllDemandeByUserFailure = createAction('[User] Get All Demande By User Failure',
  props<{ error: any }>()
);

// set selected demande
export const setSelectedDemandeId = createAction('[User] Set Selected Demande id',
  props<{ demandeId: string }>()
);

// create comment
export const createComment = createAction('[User] Create Comment',
  props<{ comment: string, demandeId: string }>());

// delete demande
export const deleteDemande = createAction('[User] Delete Demande',
  props<{ demandeId: string }>());

export const deleteDemandeSuccess = createAction('[User] Delete Demande Success',
props<{ demandeId: string }>());

export const deleteDemandeFailure = createAction('[User] Delete Demande Failure',
props<{ error: any }>());


export const logout = createAction('[User] Logout');

