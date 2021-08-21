import { authApi } from '../../service';

const initialState = {
  loading: false,
  payload: null,
  error: null,
};

const USER = 'USER';
const USER_PENDING = `${USER}_PENDING`;
const USER_SUCCESS = `${USER}_SUCCESS`;
const USER_FAILURE = `${USER}_FAILURE`;

export default function user(state = initialState, action) {
  switch (action.type) {
    case USER_PENDING:
      return {
        loading: true,
        payload: null,
        error: null,
      };
    case USER_SUCCESS:
      return {
        loading: false,
        payload: action.payload,
        error: null,
      };
    case USER_FAILURE:
      return {
        loading: false,
        payload: null,
        error: action.error,
      };
    default:
      return state;
  }
}

export const join = data => ({
  type: USER,
  payload: authApi.join(data),
});

export const login = data => ({
  type: USER,
  payload: authApi.login(data),
});

export const logout = data => ({
  type: USER,
  payload: authApi.logout(data),
});
