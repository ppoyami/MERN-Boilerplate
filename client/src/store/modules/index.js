import { combineReducers } from 'redux';

import user from './user';
import bannerReducer from './bannerReducer';

const rootReducer = combineReducers({
  user: user,
  banner: bannerReducer,
});

export default rootReducer;
