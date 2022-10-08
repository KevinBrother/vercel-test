import { categoryStore } from "@/stores";

export const categoryService = {

  getCategoryById(id: string) {
    return new Promise<ICategory[]>((resolve, reject) => {
      const categoryList = categoryStore.getCategoryById(id);
      resolve(categoryList);
    })
  },

  getCategoryByPId(pId: string) {
    return new Promise<ICategory[]>((resolve, reject) => {
      const categoryList = categoryStore.getCategoryByPId(pId);
      resolve(categoryList);
    })
  },

  addCategoryById(category: ICategory, id: string) {
    console.log('%c [ addCategoryById ]-13', 'font-size:13px; background:pink; color:#bf2c9f;', category)

    return new Promise<Boolean>((resolve, reject) => {
      resolve(categoryStore.addCategoryById(category, id));
    })
  },

  editCategory(category: ICategory) {
    console.log('%c [ editCategory ]-14', 'font-size:13px; background:pink; color:#bf2c9f;', category)
    return new Promise<Boolean>((resolve, reject) => {
      resolve(categoryStore.editCategory(category));
    })
  }
}
