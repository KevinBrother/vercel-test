import { makeAutoObservable } from 'mobx'
import { $storage } from '@/utils'

// TODO 2022年10月1日 23:41:59 通过树来存取
class Category {
  categoryList = $storage.categoryList;

  constructor() {
    makeAutoObservable(this);
  }

  getCategoryById(id: string) {
    return this.categoryList.filter(c => c.pId === id) || [];
  }

  addCategoryById(category: ICategory, id: string) {
    const parentCategory = this.categoryList.find(c => c.pId === id);
    if (!parentCategory && category.pId !== id) {
      return false;
    }

    this.categoryList.push(category);
    $storage.categoryList = this.categoryList;

    return true;
  }
};

export const categoryStore = new Category();