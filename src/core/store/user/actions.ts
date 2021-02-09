import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { createPostApi, fetchPostApi, IPost, RequestPost, ResponseBodyPost } from 'api/post';
import { ErrorApi } from 'api/types';
import { RootState } from 'core/store/rootReducer';
import { unshiftUserPostAction } from 'core/store/home/actions';

import { reduxStoreName, PAGE_SIZE, ICreateTweet } from './types';

export const resetAction = createAction(`${reduxStoreName}/resetAction`);

export const fetchUserPost = createAsyncThunk<
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

export const fetchUserNextPostPage = createAsyncThunk<
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
    } = state.user;

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
      const { loading } = state.user;
      if (loading) {
        return false;
      }
    },
  },
);

// удаление поста по ID
export const deleteUserPostByIdAction = createAction<number>(
  `${reduxStoreName}/deleteUserPostByIdAction`,
);

// добалвение нового поста
export const createUserPostByIdAction = createAsyncThunk<
  IPost,
  ICreateTweet,
  {
    rejectValue: ErrorApi;
  }
>(`${reduxStoreName}/createUserPostByIdAction`, async (request, { rejectWithValue, dispatch }) => {
  let newPost: IPost;

  try {
    newPost = await createPostApi(request);
    return await createPostApi(request);
  } catch (e) {
    return rejectWithValue(e);
  } finally {
    dispatch(unshiftUserPostAction(newPost));
  }
});
