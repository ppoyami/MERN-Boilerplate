const initialState = {
  message: '',
  isSuccess: false,
  show: false,
};

const SHOW = 'banner/show';
const HIDDEN = 'banner/hidden';

export default function bannerReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW:
      return {
        message: action.message,
        isSuccess: action.isSuccess,
        show: true,
      };
    case HIDDEN:
      return {
        ...state,
        show: false,
      };
    default:
      return state;
  }
}

export const show = (message, isSuccess) => (dispatch, _) => {
  dispatch({ type: SHOW, message, isSuccess });
  setTimeout(() => {
    dispatch({ type: HIDDEN });
  }, 3000);
};
