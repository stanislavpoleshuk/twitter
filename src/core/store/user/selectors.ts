import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../rootReducer';

const userState = (state: RootState) => state.user;

export const userPostsSelector = createSelector(userState, ({ content }) => content);
