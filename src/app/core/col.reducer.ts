import * actions from "./col.action";
import { EntityState, createEntityAdapter  } from "@ngrx/entity";
import { createFeatureSelector } from "@ngrx/store";

export interface Col{
 id: number,
 name: string,
 width: number,
}

// Entity Adapter
export const colAdapter = createEntityAdapter<Col>();
export interface State extends EntityState<Col> { }

// Default Data / Initial State
const defaultCol = {
  ids: ['123'],
  entities: {
    '123': {
      id: '123',
      name: 'New Col',
      width: 200,
    }
  }
}

export const intialState: State = colAdapter.getInitialState(defaultCol)

// Reducer
export function colReducer(
  state: State = intialState,
  action: actions.ColActions) {

  switch (action.type) {
    case actions.CREATE:
      return colAdapter.addOne(action.col, state);

    case actions.UPDATE:
      return colAdapter.updateOne({
        id: action.id,
        changes: action.changes
      }, state);

    case actions.DELETE:
      return colAdapter.removeOne(action.id, state)

    default:
      return state;
  }
}

// Create default Selectors
export const getColState = createFeatureSelector<State>('col');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = colAdapter.getSelectors(getColState)
