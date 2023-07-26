import { RouterState } from "@ngrx/router-store";
import { UserState } from "./userFlow/user.state";
import { DialogState } from "./dialogs/dialogs.state";

export interface AppStateInterface {
  RouterState : RouterState;
  UserState: UserState;
  DialogState: DialogState;
}
