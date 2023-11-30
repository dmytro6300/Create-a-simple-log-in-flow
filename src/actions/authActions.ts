import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from '../constants/actionTypes';

import { Action, Dispatch } from 'redux';
import { auth } from '../helpers/firebase';

export interface Auth {
    uid:string
    token:Promise<string>
}

interface LoginRequestAction extends Action<typeof LOGIN_REQUEST> {}

interface LoginSuccessAction extends Action<typeof LOGIN_SUCCESS> {
  payload: Auth | null; // Define your User type
}

interface LoginFailureAction extends Action<typeof LOGIN_FAILURE> {
  payload: string; // Error message
}

interface LogoutAction extends Action<typeof LOGOUT> {}

export type AuthAction =
    | LoginRequestAction
    | LoginSuccessAction
    | LoginFailureAction
    | LogoutAction;

export const loginRequest = (): LoginRequestAction => ({
    type: LOGIN_REQUEST,
});

export const loginSuccess = (auth: Auth): LoginSuccessAction => ({
    type: LOGIN_SUCCESS,
    payload: auth,
});

export const loginFailure = (error: string): LoginFailureAction => ({
    type: LOGIN_FAILURE,
    payload: error,
});

export const logoutAction = (): LogoutAction => ({
    type: LOGOUT,
});

// Async action creator using Thunk
export const loginUser = (credentials: { email: string; password: string }) => async (dispatch:Dispatch) => {
    try {
        const userCredential = await auth.signInWithEmailAndPassword(credentials.email, credentials.password);
        const user = userCredential.user;
        if (user) {
        // If user exists, dispatch the loginSuccess action with user details
            dispatch(loginSuccess({
                uid: user.uid || '',
                token: user.getIdToken() || '',
            }));
        }
    } catch (error) {
        dispatch(loginFailure('Invalid credentials'));
    }
};
