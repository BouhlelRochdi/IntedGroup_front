import { createAction, props } from "@ngrx/store";


export const OPEN = createAction('[DIALOG] OPEN',props<{dialogName: string}>());
export const CLOSE = createAction('[DIALOG] CLOSE',props<{dialogName: string}>());