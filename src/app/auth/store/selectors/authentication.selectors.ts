import { createSelector } from '@ngrx/store';
import { getAuthState } from '../reducers';
import { Authentication } from '../reducers/index';
import * as authenticationState from '../reducers/authentication.reducers';

export const getAuthentication: any = createSelector(
  getAuthState,
  (state: Authentication) => state.authData,
);
export const getSelectUser: any = createSelector(
  getAuthentication,
  authenticationState.getSelectUser,
);
export const getSelectError: any = createSelector(
  getAuthentication,
  authenticationState.getSelectError,
);
export const getTextMessage: any = createSelector(
  getAuthentication,
  authenticationState.getTextMessage,
);
