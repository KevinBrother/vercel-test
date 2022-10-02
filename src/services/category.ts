import { categoryStore, ICategory } from "@/stores";

export const categoryService = {

  getCategoryById(id: string) {
    return new Promise<ICategory[]>((resolve, reject) => {
      const categoryList = categoryStore.getCategoryById(id);
      resolve(categoryList);
    })
  },

  addCategoryById(category: ICategory, id: string) {
    return new Promise<Boolean>((resolve, reject) => {
      resolve(categoryStore.addCategoryById(category, id));
    })
  },

  editCategory(category: ICategory) {
    return new Promise<Boolean>((resolve, reject) => {
      resolve(categoryStore.editCategory(category));
    })
  }
}
