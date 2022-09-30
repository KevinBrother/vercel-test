import { flatData } from "@/utils";

export interface IData {
  id: string;
  pId: string;
  children?: IData[];
  name: string;
  desc: string;
  /*   updateTime: Date;
    createTime: Date; */
}

// 遍历整棵树
// 查找到某个节点
// -- 查找某个节点的所有子节点
// -- 给某个节点添加子节点

export class Category {
  flatData = [];
  data = [
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
          children: [
            {
              id: '1-1-1',
              pId: '1-1',
              name: '通州',
              desc: '人杰地灵',
              children: [],
            }
          ],
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
    const data = flatData(this.data);
    console.log('%c [ data ]-66', 'font-size:13px; background:pink; color:#bf2c9f;', data)
    this.flatData = data;
  }

  getCategoryById(id) {
    return this.flatData.filter(c => c.pId === id) || [];
  }
};

export type TCategoryData = Category['data'][0];