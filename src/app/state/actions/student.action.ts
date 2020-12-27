import { Action } from '@ngrx/store';
import { Student } from '../../student';

export const ADD_STUDENT = '[Student] Add';
export const DELETE_STUDENT = '[Student] Delete';
export const UPDATE_STUDENT = '[Student] Update';

export class AddStudent implements Action {
  constructor(public payload: Student) {}
  readonly type = ADD_STUDENT;
}

export class DeleteStudent implements Action {
  constructor(public payload: Student) {}
  readonly type = DELETE_STUDENT;
}

export class UpdateStudent implements Action {
  constructor(public payload: Student) {}
  readonly type = UPDATE_STUDENT;
}

export type Actions = AddStudent | DeleteStudent | UpdateStudent;
