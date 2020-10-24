import { ActionReducerMap } from "@ngrx/store";
import { colReducer }  from "../core/col.reducer";

export const reducers: ActionReducerMap<any> = {
  task: colReducer
}