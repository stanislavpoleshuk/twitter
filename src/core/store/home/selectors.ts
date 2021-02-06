import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../rootReducer';

const homeState = (state: RootState) => state.home;

export const homePostsSelector = createSelector(homeState, ({ content }) => content);
