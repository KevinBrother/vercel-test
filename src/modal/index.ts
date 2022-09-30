import { flatData } from "@/utils";
import { isArray } from "lodash-es";

export interface IData {
  id: string;
  pId: string;
  children?: IData[];
  name: string;
  desc: string;
  /*   updateTime: Date;
    createTime: Date; */
}

export class Category {
  flatData = [];
  category = [
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
  ];

  constructor() {
    // TODO 2022年9月30日 22:05:07 转为树的方式查找效率会更高
    this.flatData = flatData(this.category);
  }

  getCategoryById(id) {
    return this.flatData.filter(c => c.pId === id) || [];
  }
}

