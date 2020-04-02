import {
  ACTION_REVERT_ALL_FIELD,
  ACTION_CHANGE_FIRST_NAME,
  ACTION_CHANGE_SECOND_NAME
} from '../consts';

/** Interface контейнера для приема данных с сервера. */
export interface IData<ICourseData> {
  data: ICourseData;
}

/** Interface данных запрашиваемых с сервера. */
export interface ICourseData {
  rates: number[];
  base: string;
  date: string;
}

/** Interface action поля FirstName компонента App. */
export interface ChangeFirstNameAction {
  type: typeof ACTION_CHANGE_FIRST_NAME;
  payload: IFieldState;
}

/** Interface action поля SecondName компонента App. */
export interface ChangeSecondNameAction {
  type: typeof ACTION_CHANGE_SECOND_NAME;
  payload: IFieldState;
}

/** Interface action для сброса к initial компонента App. */
export interface HandleCancelAction {
  type: typeof ACTION_REVERT_ALL_FIELD;
  payload: IFieldState;
}

/** Interface полей компонента App. */
export interface IFieldState {
  firstName: any;
  secondName: any;
}

/** Interface для action поля firstName. */
export interface FirstName {
  type: typeof ACTION_CHANGE_FIRST_NAME;
  payload: IFieldState;
}

/** Interface для action поля secondName. */
export interface SecondName {
  type: typeof ACTION_CHANGE_SECOND_NAME;
  payload: IFieldState;
}

/** Interface для action снопки "Cancel". */
export interface InitialState {
  type: typeof ACTION_REVERT_ALL_FIELD;
  payload: IFieldState;
}

export type IFieldActionTypes = FirstName | SecondName | InitialState;
