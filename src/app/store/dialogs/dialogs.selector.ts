import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DialogState } from "./dialogs.state";

export const DialogFeatureSelector =
  createFeatureSelector<DialogState>('dialogReducer');

export const commentDialogSelector = createSelector(DialogFeatureSelector, (c) => c.commentDialog);
