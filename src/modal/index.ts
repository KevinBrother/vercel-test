import { flattenDeep } from "lodash-es";

export interface IData {
  id: string;
  pId: string;
  children?: IData[];
  name: string;
  desc: string;
  /*   updateTime: Date;
    createTime: Date; */
}

const data: IData[] = [
  {
    id: '1',
    pId: '',
    name: '江苏',
    desc: '不错',
    children: [
      {
        id: '1-1',
        pId: '1',
        name: '南通',
        desc: '很好',
        children: [],
      },
      {
        id: '1-2',
        pId: '1',
        name: '南京',
        desc: '不错呀',
        children: [],
      }
    ],
  },
  {
    id: '2',
    pId: '',
    name: '浙江',
    desc: '不错',
    children: [
      {
        id: '2-1',
        pId: '2',
        name: '杭州',
        desc: '很好',
        children: [],
      },
      {
        id: '2-2',
        pId: '2',
        name: '萧山',
        desc: '不错呀',
        children: [],
      }
    ],
  }
]

// TODO 转为树的方式查找效率会更高
const flatData = flattenDeep(data);

export function getCategoryById(id: string) {
  return flatData.find(c => c.id === id);
}
