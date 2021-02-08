import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BaseStatePageable } from 'core/store/types';
import { IPost, ResponseBodyPost } from 'api/post';
import { isErrorApi } from 'api/types';

import { UserState, reduxStoreName as name, PAGE_SIZE } from './types';
import {
  deleteUserPostByIdAction,
  fetchUserNextPostPage,
  fetchUserPost,
  resetAction,
} from './actions';

const initialStatePost: BaseStatePageable<IPost> = {
  content: [],
  firstLoaded: false,
  loading: false,
  pageable: {
    pageNumber: 0,
    pageSize: PAGE_SIZE,
  },
  totalPages: 2,
  error: undefined,
};

const initialState: UserState = {
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
      .addCase(fetchUserPost.pending, (state, action) => {
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
      .addCase(fetchUserPost.fulfilled, (state, action) => {
        setStateReducer(state, action);
        state.content = action.payload.content;
      })
      .addCase(fetchUserPost.rejected, (state, action) => {
        state.loading = false;
        if (isErrorApi(action.payload)) {
          state.error = action.payload;
        }
      });

    // постраничная подгрузка
    builder
      .addCase(fetchUserNextPostPage.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserNextPostPage.fulfilled, (state, action) => {
        setStateReducer(state, action);
        state.content.push(...action.payload.content);
      })
      .addCase(fetchUserNextPostPage.rejected, (state, action) => {
        state.loading = false;
        if (isErrorApi(action.payload)) {
          state.error = action.payload;
        }
      });

    // удаление по ID
    builder.addCase(deleteUserPostByIdAction, (state, action) => {
      const id = action.payload;
      state.content = state.content.filter((x) => x.id !== id);
    });
  },
});

function setStateReducer(state: UserState, action: PayloadAction<ResponseBodyPost>) {
  const { pageable } = action.payload;
  state.firstLoaded = true;
  state.loading = false;
  state.pageable = pageable;
}

export const reducer = slice.reducer;
