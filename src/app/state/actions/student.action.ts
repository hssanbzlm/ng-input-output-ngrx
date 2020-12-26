import { Action } from '@ngrx/store';
import { Student } from '../../student';

export const ADD_STUDENT = '[Student] Add';
export const DELETE_STUDENT = '[Student] Delete';
export const SAVE_STUDENT = '[Student] Save';

export class AddStudent implements Action {
  constructor(public payload: Student) {}
  readonly type = ADD_STUDENT;
}

export class DeleteStudent implements Action {
  constructor(public payload: Student) {}
  readonly type = DELETE_STUDENT;
}

export class SaveStudent implements Action {
  constructor(public payload: Student) {}
  readonly type = SAVE_STUDENT;
}

export type Actions = AddStudent | DeleteStudent | SaveStudent;
