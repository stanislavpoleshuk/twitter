import faker from 'faker';
import { ConstructPageable, GenerateRandomId } from 'api/types';
import fakerApiClient from 'api/fakerApiClient';
import { ICreateTweet } from 'core/store/user/types';

import { IPost, RequestPost, ResponseBodyPost } from './types';

import { CURRENT_USER_INFO } from '../../mocks';

export const fetchPostApi = (request: RequestPost): Promise<ResponseBodyPost> => {
  return fakerApiClient.fetch(() => {
    const { pageNumber, pageSize } = request;
    const content: Array<IPost> = Array.from({ length: pageSize }, (x, i) => {
      return {
        id: GenerateRandomId(i, pageSize, pageNumber),
        message: faker.commerce.productDescription(),
        date: new Date().toISOString(),
        user: CURRENT_USER_INFO,
      };
    });
    return {
      content,
      pageable: ConstructPageable(pageNumber, pageSize),
    };
  });
};

export const createPostApi = (post: ICreateTweet): Promise<IPost> => {
  return fakerApiClient.fetch(() => {
    const newPost: IPost = {
      id: Date.now(),
      message: post.message,
      date: new Date().toISOString(),
      user: CURRENT_USER_INFO,
    };
    return newPost;
  }, 500);
};
