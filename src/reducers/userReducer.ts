// userReducer.ts
import {
    FETCH_USER_FAILURE,
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    User,
    UserActionTypes,
} from '../constants/userTypes';

export interface UserState {
    user: User | null;
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    user: null,
    loading: false,
    error: null,
};

const userReducer = (state = initialState, action: UserActionTypes): UserState => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return { ...state, loading: true, error: null };
        case FETCH_USER_SUCCESS:
            return { ...state, loading: false, user: action.payload, error: null };
        case FETCH_USER_FAILURE:
            return { ...state, loading: false, error: action.error };
        default:
            return state;
    }
};

export default userReducer;