import { IAction } from '../types';
// interfaces
export interface IUser {
  name: string | undefined;
  surname: string | undefined;
  age: number | undefined;
  token: string | undefined;
}

// Action Types
export const GET_USER = 'react-case-study/user/get_user';
export const SET_USER = 'react-case-study/user/set_user';

const initalState: IUser = {
  name: undefined,
  surname: undefined,
  age: undefined,
  token: undefined,
};
// Reducer
export default function reducer(state = initalState, action: IAction<IUser[]>): IUser {
  switch (action.type) {
    case SET_USER:
      const usersArray = action.payload as Array<IUser>;
      const firstUser = usersArray[0];
      return { ...firstUser };
    default:
      return state;
  }
}

// Action Creators
export function getUser(): IAction<void> {
  return { type: GET_USER };
}

export function setUser(user: IUser): IAction<IUser> {
  return { type: SET_USER, payload: user };
}
