type ISafeAny = any;
type AllowFn<T> = (() => T) | T;

export interface ICategory {
  id: string;
  pId: string;
  children?: ICategory[];
  name: string;
  desc: string;
  /*   updateTime: Date;
    createTime: Date; */
}