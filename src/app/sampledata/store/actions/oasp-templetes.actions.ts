
import { Action } from '@ngrx/store';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Login } from '../../models/login.model';

export enum AuthActionTypes {
  LOAD_DATA = '[LoginAuth] LoadData ',
  LOAD_DATA_SUCCESS = '[LoginAuth] LoadDataSuccess ',
  LOAD_DATA_FAIL = '[LoginAuth] LoadDataFail',
  LOGIN = '[LoginAuth] Login ',
  LOGIN_SUCCESS = '[LoginAuth] Login Success',
  LOGIN_FAILURE = '[LoginAuth] Login Failure',
  LOGOUT = '[LoginAuth] Logout ',
  LOGOUT_SUCCESS = '[LoginAuth] Logout Success',
  ADD_DATA = '[AddData] Add',
  ADD_DATA_SUCCESS = '[AddData] AddDataSuccess',
  ADD_DATA_FAIL = '[AddData] AddDataFail',
  DELETE_DATA = '[DeleteData] Delete',
  DELETE_DATA_SUCCESS = '[DeleteData] DeleteSuccess',
  DELETE_DATA_FAIL = '[DeleteData] DeleteDataFail',
  EDIT_DATA = '[EditData] EditData',
  EDIT_DATA_FAIL = '[EditData] EditDataFail',
  EDIT_DATA_SUCCESS = '[EditData] EditDataSuccess',
  SEARCH_DATA = '[SearchData] SearchData',
  SEARCH_DATA_SUCCESS = '[SearchData] SearchDataSuccess',
  ERROR_SEARCH_DATA = '[ErrorSearchData] SearchDataSuccess',
}

export class LogInAction implements Action {
  readonly type = AuthActionTypes.LOGIN;
  constructor(public payload: any) {}
}
export class LogInSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;
  constructor(public payload: any) {}
}
export class LogInFailure implements Action {
  readonly type = AuthActionTypes.LOGIN_FAILURE;
  constructor(public payload: any) {}
}
export class LogOutAction implements Action {
  readonly type = AuthActionTypes.LOGOUT;
  constructor() {}
}
export class LogOutSuccessAction implements Action {
  readonly type = AuthActionTypes.LOGOUT_SUCCESS;
  constructor() {}
}
export class AddData implements Action {
  readonly type = AuthActionTypes.ADD_DATA;
  constructor(public payload: any) {}
}
export class AddDataSuccess implements Action {
  readonly type = AuthActionTypes.ADD_DATA_SUCCESS;
  constructor(public payload: any) {}
}
export class AddDatafail implements Action {
  readonly type = AuthActionTypes.ADD_DATA_FAIL;
  constructor(public payload: { error: Error }) {}
}
export class DeleteData implements Action {
  readonly type = AuthActionTypes.DELETE_DATA;
  constructor(public payload: any) {}
}
export class DeleteDataSuccess implements Action {
  readonly type = AuthActionTypes.DELETE_DATA_SUCCESS;
  constructor(public payload: any) { }
}
export class EditData implements Action {
  readonly type = AuthActionTypes.EDIT_DATA;
  constructor(public payload: any) {}
}
export class EditDataSuccess implements Action {
  readonly type = AuthActionTypes.EDIT_DATA_SUCCESS;
  constructor(public payload: any) {}
}
export class EditDataFail implements Action {
  readonly type = AuthActionTypes.EDIT_DATA_FAIL;
  constructor(public payload: { error: Error }) {}
}
export class DeleteDataFail implements Action {
  readonly type = AuthActionTypes.DELETE_DATA_FAIL;
  constructor(public payload: { error: Error }) {}
}
export class SearchData implements Action {
  readonly type = AuthActionTypes.SEARCH_DATA;
  constructor(public payload: any) {}
}
export class SearchDataSuccess implements Action {
  readonly type = AuthActionTypes.SEARCH_DATA_SUCCESS;
  constructor(public payload: any) {}
}
export class errorSearchData implements Action {
  readonly type = AuthActionTypes.ERROR_SEARCH_DATA;
  constructor(public payload: any) {}
}
export class loadDataSuccess implements Action {
  readonly type = AuthActionTypes.LOAD_DATA_SUCCESS;
  constructor() {}
}
export class loadDataFail implements Action {
  readonly type = AuthActionTypes.LOAD_DATA_FAIL;
  constructor(public payload: any) {}
}
export class loadData implements Action {
 readonly type = AuthActionTypes.LOAD_DATA_SUCCESS;
  constructor() {}
}
export type All =
  | LogInAction
  | LogInSuccess
  | LogInFailure
  | LogOutAction
  | LogOutSuccessAction
  | AddData
  | AddDataSuccess
  | AddDatafail
  | DeleteDataSuccess
  | DeleteData
  | DeleteDataFail
  | EditData
  | EditDataSuccess
  | EditDataFail
  | SearchData
  | SearchDataSuccess
  | errorSearchData
  | loadDataSuccess
  | loadData;