import { createAction, props } from '@ngrx/store';
import { DemandeDto } from 'src/app/core/dtos/demande.dto';
import { LoginDto } from 'src/app/core/dtos/login.dto';

export const setConnectedUser = createAction('[User] Set Connected User',
  props<{ user: LoginDto }>());

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
  props<{ demande: DemandeDto }>());

export const updateDemandeSuccess = createAction('[User] Update Demande Success',
  props<{ demande: DemandeDto }>()
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

export const logout = createAction('[User] Logout');

