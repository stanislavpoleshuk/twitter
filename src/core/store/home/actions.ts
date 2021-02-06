import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPostApi, RequestPost, ResponseBodyPost } from 'api/post';
import { ErrorApi } from 'api/types';

import { reduxStoreName, PAGE_SIZE } from './types';

export const resetAction = createAction(`${reduxStoreName}/resetAction`);

export const fetchHomePost = createAsyncThunk<
  ResponseBodyPost,
  RequestPost,
  {
    rejectValue: ErrorApi;
  }
>(`${reduxStoreName}/fetchProduct`, async (request, { rejectWithValue }) => {
  let _requestProduct = {
    pageSize: PAGE_SIZE,
    ...request,
  };

  try {
    return await fetchPostApi(_requestProduct);
  } catch (e) {
    return rejectWithValue(e);
  }
});
