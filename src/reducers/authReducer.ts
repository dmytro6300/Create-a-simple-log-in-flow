import { Auth, AuthAction } from '../actions/authActions';
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from '../constants/actionTypes';
export interface AuthState {
  auth: Auth | null;
  error: string | null;
  loading: boolean;
}

const initialState: AuthState = {
  auth: null,
  error: null,
  loading: false
};

const authReducer = (
  state: AuthState = initialState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case LOGIN_SUCCESS:
      return { ...state, auth: action.payload, loading: false, error: null };
    case LOGIN_FAILURE:
      return { ...state, auth: null, loading: false, error: action.payload };
    case LOGOUT:
      return { ...state, auth: null, loading: false, error: null };
    default:
      return state;
  }
};

export default authReducer;
