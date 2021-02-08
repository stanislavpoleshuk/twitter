import { ErrorApi, Pageable } from 'api/types';

export interface BaseState<C> {
  content: C[];
  firstLoaded: boolean;
  loading: boolean;
  error: ErrorApi | null;
}

export interface BaseStatePageable<T> extends BaseState<T> {
  pageable: Pageable;
  totalPages: number;
}
