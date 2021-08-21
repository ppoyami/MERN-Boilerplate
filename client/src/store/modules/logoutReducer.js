import { authApi } from '../../service';

const initialState = {
  loading: false,
  payload: null,
  error: null,
};

const LOGOUT = 'LOGOUT';
const LOGOUT_PENDING = `${LOGOUT}_PENDING`;
const LOGOUT_SUCCESS = `${LOGOUT}_SUCCESS`;
const LOGOUT_FAILURE = `${LOGOUT}_FAILURE`;

export default function logoutReducer(state = initialState, action) {
  switch (action.type) {
    case LOGOUT_PENDING:
      return {
        loading: true,
        payload: null,
        error: null,
      };
    case LOGOUT_SUCCESS:
      return {
        loading: false,
        payload: action.payload,
        error: null,
      };
    case LOGOUT_FAILURE:
      return {
        loading: false,
        payload: null,
        error: action.error,
      };
    default:
      return state;
  }
}

export const logout = data => ({
  type: LOGOUT,
  payload: authApi.logout(data),
});
