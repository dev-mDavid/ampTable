import * as actions from "./col.action";
import { EntityState, createEntityAdapter  } from "@ngrx/entity";
import { createFeatureSelector } from "@ngrx/store";

export interface Col{
 id: string,
 name: string,
 sc_name: string,
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
      name: 'Id',
      sc_name: 'id',
      width: 75,
    },
    '1': {
      id:'1',
      name: 'Name',
      sc_name: 'name',
      width: 250,
    },
    '2': {
      id:'2',
      name: 'Status',
      sc_name: 'status',
      width: 150,
    },
    '3': {
      id:'3',
      name: 'Creator',
      sc_name: 'creator',
      width: 150,
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
