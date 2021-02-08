import { combineReducers } from '@reduxjs/toolkit';

import home from './home/reducer';
import user from './user/reducer';

const rootReducer = combineReducers({
  home,
  user,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
