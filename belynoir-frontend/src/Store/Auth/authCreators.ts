import {Dispatch} from "redux";
import {AuthActionTypes} from "./authActionTypes";
import {Credentials} from "../../Entities/Login";
import {LoginAction} from "./authActions";

export const login = (credentials: Credentials) => {
    return (dispatch: Dispatch<LoginAction>) => {
        new Promise<boolean>((res, rej) => {
            dispatch({
                type: AuthActionTypes.LOGIN,
                payload: false
            })
        })
    }
}
