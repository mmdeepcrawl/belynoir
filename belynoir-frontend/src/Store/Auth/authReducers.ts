import {AuthAction} from "./authActions";
import {AuthActionTypes} from "./authActionTypes";

export interface AuthState {
    isAuthenticated: boolean;
}

const initialState: AuthState = {
   isAuthenticated: false
};

const authReducer = (state: AuthState = initialState, action: AuthAction) => {

    switch (action.type) {
        case AuthActionTypes.LOGIN:
            return { ...state, isAuthenticated: action.payload };
        default:
            return state;
    }
}

export default authReducer;
