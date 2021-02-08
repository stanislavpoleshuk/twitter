import { BaseStatePageable } from 'core/store/types';
import { IPost } from 'api/post';

export const PAGE_SIZE: number = 8;
export const reduxStoreName = 'user';

export interface UserState extends BaseStatePageable<IPost> {}
