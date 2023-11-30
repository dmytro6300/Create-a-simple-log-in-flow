export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';
export interface User {
    uid: string;
    first_name: string;
    last_name: string;
    // Add other fields as needed
}
interface FetchUserRequestAction {
    type: typeof FETCH_USER_REQUEST;
}

interface FetchUserSuccessAction {
    type: typeof FETCH_USER_SUCCESS;
    payload: User;
}

interface FetchUserFailureAction {
    type: typeof FETCH_USER_FAILURE;
    error: string;
}

export type UserActionTypes =
    | FetchUserRequestAction
    | FetchUserSuccessAction
    | FetchUserFailureAction;