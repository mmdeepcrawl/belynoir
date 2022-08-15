import {AuthActionTypes} from './authActionTypes';

export interface LoginAction {
    type: AuthActionTypes.LOGIN
    payload: boolean
}

export type AuthAction = LoginAction;


