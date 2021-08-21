import { authApi } from '../../service';

const initialState = {
  loading: false,
  payload: null,
  error: null,
};

const JOIN = 'JOIN';
const JOIN_PENDING = `${JOIN}_PENDING`;
const JOIN_SUCCESS = `${JOIN}_SUCCESS`;
const JOIN_FAILURE = `${JOIN}_FAILURE`;

export default function joinReducer(state = initialState, action) {
  switch (action.type) {
    case JOIN_PENDING:
      return {
        loading: true,
        payload: null,
        error: null,
      };
    case JOIN_SUCCESS:
      return {
        loading: false,
        payload: action.payload,
        error: null,
      };
    case JOIN_FAILURE:
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
  type: JOIN,
  payload: authApi.join(data),
});
