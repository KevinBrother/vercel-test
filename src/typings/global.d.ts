type ISafeAny = any;
type AllowFn<T> = (() => T) | T;

interface ICategory {
  id: string;
  pId: string;
  children: ICategory[];
  name: string;
  desc: string;
  /*   updateTime: Date;
    createTime: Date; */
}