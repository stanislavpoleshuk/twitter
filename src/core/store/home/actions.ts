import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPostApi, IPost, RequestPost, ResponseBodyPost } from 'api/post';
import { ErrorApi } from 'api/types';
import { RootState } from 'core/store/rootReducer';

import { reduxStoreName, PAGE_SIZE } from './types';

export const resetAction = createAction(`${reduxStoreName}/resetAction`);

export const fetchHomePost = createAsyncThunk<
  ResponseBodyPost,
  RequestPost,
  {
    rejectValue: ErrorApi;
  }
>(`${reduxStoreName}/fetchPost`, async (request, { rejectWithValue }) => {
  let _requestProduct = {
    pageSize: PAGE_SIZE,
    pageNumber: 1,
    ...request,
  };

  try {
    return await fetchPostApi(_requestProduct);
  } catch (e) {
    return rejectWithValue(e);
  }
});

export const fetchHomeNextPostPage = createAsyncThunk<
  ResponseBodyPost,
  RequestPost,
  {
    rejectValue: ErrorApi | number;
  }
>(
  `${reduxStoreName}/fetchPostNextPage`,
  async (requestProduct, { getState, rejectWithValue }) => {
    const state = getState() as RootState;
    const {
      pageable: { pageNumber, pageSize },
      totalPages,
    } = state.home;

    let _requestProduct = {
      pageSize,
      ...requestProduct,
    };

    if (pageNumber < totalPages) {
      _requestProduct.pageNumber = pageNumber + 1;
      try {
        return await fetchPostApi(_requestProduct);
      } catch (e) {
        return rejectWithValue(e);
      }
    } else {
      return rejectWithValue(0);
    }
  },
  {
    condition: (args, { getState }) => {
      const state = getState() as RootState;
      const { loading } = state.home;
      if (loading) {
        return false;
      }
    },
  },
);

// добавить в начало списка новый пост
export const unshiftUserPostAction = createAction<IPost>(`${reduxStoreName}/unshiftUserPostAction`);
