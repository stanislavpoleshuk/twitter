import { IUser } from 'api/user';
import { RequestByPage, ResponseBody } from 'api/types';

export interface IPost {
  id: number;
  message: string;
  date: string;
  user: IUser;
}

export interface RequestPost extends RequestByPage {
  userId?: number;
}

export interface ResponseBodyPost extends ResponseBody<IPost> {}
