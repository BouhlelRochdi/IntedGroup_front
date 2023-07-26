import { createReducer, on } from '@ngrx/store';
import { DialogState } from './dialogs.state';
import * as  fromDIALOG from './dialogs.action';

export const initialState: DialogState = {
  commentDialog: false,
};

export const dialogReducer = createReducer(
  initialState,
  on(fromDIALOG.OPEN, (state,{dialogName}) => ({
    ...state,
    [dialogName]: true,
  })),
  on(fromDIALOG.CLOSE, (state,{dialogName}) => ({
    ...state,
    [dialogName]: false,
  })),

);
