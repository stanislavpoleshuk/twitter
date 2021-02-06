import faker from 'faker';
import { IPost } from 'api/post';

import { CURRENT_USER_INFO } from './user';

export const DEFAULT_USER_POSTS: Array<IPost> = [
  {
    id: 1,
    message: faker.commerce.productDescription(),
    date: new Date().toISOString(),
    user: CURRENT_USER_INFO,
  },
  {
    id: 2,
    message: faker.commerce.productDescription(),
    date: new Date().toISOString(),
    user: CURRENT_USER_INFO,
  },
];
