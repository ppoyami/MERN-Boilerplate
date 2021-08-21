import { authApi } from '../../service';

const initialState = {
  loading: false,
  payload: null,
  error: null,
};

const LOGIN = 'LOGIN';
const LOGIN_PENDING = `${LOGIN}_PENDING`;
const LOGIN_SUCCESS = `${LOGIN}_SUCCESS`;
const LOGIN_FAILURE = `${LOGIN}_FAILURE`;

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_PENDING:
      return {
        loading: true,
        payload: null,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        loading: false,
        payload: action.payload,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        loading: false,
        payload: null,
        error: action.error,
      };
    default:
      return state;
  }
}

export const login = data => ({
  type: LOGIN,
  payload: authApi.login(data),
});
