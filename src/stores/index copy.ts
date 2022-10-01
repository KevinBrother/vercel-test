import { flatData } from "@/utils";

import { makeAutoObservable } from 'mobx'
export interface ICategory {
  id: string;
  pId: string;
  children?: ICategory[];
  name: string;
  desc: string;
  /*   updateTime: Date;
    createTime: Date; */
}

// - [x] 遍历整棵树
// 查找到某个节点
// - [x] 查找某个节点的所有子节点
// - [x] 给某个节点添加子节点
const categoryData = [
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

const flattenedData = flatData(categoryData);

class Category {
  // TODO 2022年9月30日 22:05:07 转为树的方式查找效率会更高
  categoryList: ICategory[] = []

  constructor() {
    makeAutoObservable(this);
  }

  setCategoryList(categoryList: ICategory[]) {
    this.categoryList = categoryList;
  }

  getCategoryById(id) {
    // return this.data.filter(c => c.pId === id) || [];
    const categoryList = flattenedData.filter(c => c.pId === id) || [];
    this.setCategoryList(categoryList);
  }

  addCategoryById(category: ICategory, id: string) {
    const pCategory = flattenedData.find(c => c.pId === id);
    if (!pCategory) {
      return false;
    }

    pCategory.children.push(category);
    this.getCategoryById(id);

    return true;
  }
};

export const categoryStore = new Category();