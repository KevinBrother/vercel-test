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
      resolve(category.addCategoryById(category, id));
    })
  }
}
