export interface RequestByPage {
  pageNumber?: number;
  pageSize?: number;
}

export interface Pageable {
  pageNumber: number;
  pageSize: number;
}

export interface ResponseBody<T> {
  content: T[];
  pageable: Pageable;
}

export interface ErrorApi {
  error: number;
  message?: string;
  data?: any;
  status?: number;
}

const DELTA = 999;
export function GenerateRandomId(index: number, pageSize: number, pageNumber: number): number {
  return pageSize * pageNumber - pageSize + index + DELTA;
}

export function ConstructPageable(pageNumber: number, pageSize: number | undefined): Pageable {
  return {
    pageNumber,
    pageSize,
  };
}

export const isErrorApi = (object?: any): object is ErrorApi =>
  object && (object as ErrorApi).error !== undefined;
