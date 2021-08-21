import { combineReducers } from 'redux';

import joinReducer from './joinReducer';
import loginReducer from './loginReducer';
import logoutReducer from './logoutReducer';
import bannerReducer from './bannerReducer';

const rootReducer = combineReducers({
  join: joinReducer,
  login: loginReducer,
  logout: logoutReducer,
  banner: bannerReducer,
});

export default rootReducer;
