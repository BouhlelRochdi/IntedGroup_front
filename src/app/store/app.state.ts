import { RouterState } from "@ngrx/router-store";
import { CounterState } from "./counter/counter.state";

export interface AppStateInterface {
  RouterState : RouterState;
  CounterState: CounterState;
}
