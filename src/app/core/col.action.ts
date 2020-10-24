import { Action } from "@ngrx/store";
import { Col } from "./col.reducer";

export const CREATE = '[Cols] Create'
export const UPDATE = '[Cols] Update'
export const DELETE = '[Cols] Delete'

export class Create implements Action {
  readonly type = CREATE;
  constructor(public col: Col) { }
}

export class Update implements Action {
  readonly type = UPDATE;
  constructor(
    public id: string,
    public changes: Partial<Col>
  ) { }
}

export class Delete implements Action {
  readonly type = DELETE;
  constructor(public id: string) { }
}

export type ColActions
= Create
| Update
| Delete