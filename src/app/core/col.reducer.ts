import * as actions from "./col.action";
import { EntityState, createEntityAdapter  } from "@ngrx/entity";
import { createFeatureSelector } from "@ngrx/store";

export interface Col{
 id: string,
 name: string,
 width: number,
}

// Entity Adapter
export const colAdapter = createEntityAdapter<Col>();
export interface State extends EntityState<Col> { }

// Default Data / Initial State
// const defaultCol = [
//   {
//       id: 1,
//       name: "Ids",       
//       width: 200,
//     },
//     {
//       id: 2,
//       name: "Name",
//       width: 200,
//     },
//     {
//       id: 3,
//       name: "Status",
//       width: 200,
//     },
//     {
//       id: 4,
//       name: "Creator",
//       width: 200,
//     },
// ]

const defaultCol = {
  ids: [
    '0', 
    '1',
    '2',
    '3',
  ],
  entities: {
    '0': {
      id: '0',
      name: 'Ids',
      width: 200,
    },
    '1': {
      id:'1',
      name: 'Name',
      width: 200,
    },
    '2': {
      id:'2',
      name: 'Status',
      width: 200,
    },
    '3': {
      id:'3',
      name: 'Creator',
      width: 200,
    },
  }
}

export const initialState: State = colAdapter.getInitialState(defaultCol)

// Reducer
export function colReducer(
  state: State = initialState,
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
