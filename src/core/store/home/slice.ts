import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BaseStatePageable } from 'core/store/types';
import { IPost, ResponseBodyPost } from 'api/post';
import { isErrorApi } from 'api/types';

import { HomeState, reduxStoreName as name, PAGE_SIZE } from './types';
import {
  fetchHomeNextPostPage,
  fetchHomePost,
  resetAction,
  unshiftUserPostAction,
} from './actions';

const initialStatePost: BaseStatePageable<IPost> = {
  content: [],
  firstLoaded: false,
  loading: false,
  pageable: {
    pageNumber: 0,
    pageSize: PAGE_SIZE,
  },
  totalPages: 5,
  error: undefined,
};

const initialState: HomeState = {
  ...initialStatePost,
};

const slice = createSlice({
  name,
  initialState: { ...initialState },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(resetAction, () => {
      return { ...initialState, error: undefined, hidden: true };
    });

    // первичная загрузка
    builder
      .addCase(fetchHomePost.pending, (state, action) => {
        const { pageSize = PAGE_SIZE } = action.meta.arg;

        return {
          ...state,
          content: state.content,
          loading: true,
          requestProduct: undefined,
          loadingOutPlan: false,
          pageable: {
            ...state.pageable,
            pageSize,
          },
        };
      })
      .addCase(fetchHomePost.fulfilled, (state, action) => {
        setStateReducer(state, action);
        state.content = action.payload.content;
      })
      .addCase(fetchHomePost.rejected, (state, action) => {
        state.loading = false;
        if (isErrorApi(action.payload)) {
          state.error = action.payload;
        }
      });

    // постраничная подгрузка
    builder
      .addCase(fetchHomeNextPostPage.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHomeNextPostPage.fulfilled, (state, action) => {
        setStateReducer(state, action);
        state.content.push(...action.payload.content);
      })
      .addCase(fetchHomeNextPostPage.rejected, (state, action) => {
        state.loading = false;
        if (isErrorApi(action.payload)) {
          state.error = action.payload;
        }
      });

    // добавить в начало списка новый пост
    builder.addCase(unshiftUserPostAction, (state, action) => {
      state.content.unshift(action.payload);
    });
  },
});

function setStateReducer(state: HomeState, action: PayloadAction<ResponseBodyPost>) {
  const { pageable } = action.payload;
  state.firstLoaded = true;
  state.loading = false;
  state.pageable = pageable;
}

export const reducer = slice.reducer;
