import { combineReducers } from 'redux';
import authReducer, { AuthState } from './authReducer';
import userReducer, { UserState } from './userReducer';
export interface RootState {
    auth: AuthState;
    user: UserState;
    // Add other reducers as needed
}

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer
});

export default rootReducer;