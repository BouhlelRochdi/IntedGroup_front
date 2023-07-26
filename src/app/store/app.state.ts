import { RouterState } from "@ngrx/router-store";
import { CounterState } from "./counter/counter.state";
import { UserState } from "./userFlow/user.state";
import { DialogState } from "./dialogs/dialogs.state";

export interface AppStateInterface {
  RouterState : RouterState;
  CounterState: CounterState;
  UserState: UserState;
  DialogState: DialogState;
}
