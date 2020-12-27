import { Student } from '../../student';
import * as StudentActions from './../actions/student.action';

const initialState: Student[] = [
  {
    id: 1,
    name: 'hssan',
    lastName: 'Bouzlima',
  },
  {
    id: 2,
    name: 'Harry',
    lastName: 'Kane',
  },
  {
    id: 3,
    name: 'Calvert',
    lastName: 'Lewin',
  },
  {
    id: 4,
    name: 'Mohamed',
    lastName: 'Salah',
  },
];

export function reducer(
  state: Student[] = initialState,
  action: StudentActions.Actions
) {
  switch (action.type) {
    case StudentActions.ADD_STUDENT:
      return [...state, action.payload];

    case StudentActions.DELETE_STUDENT:
      return [...state.filter((s) => s.id != action.payload.id)];

    case StudentActions.UPDATE_STUDENT:
      return [
        ...state.filter((s) => s.id != action.payload.id),
        action.payload,
      ];
    default:
      return state;
  }
}
