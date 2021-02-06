import { combineReducers } from '@reduxjs/toolkit';

import home from './home/reducer';

const rootReducer = combineReducers({
  home,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
