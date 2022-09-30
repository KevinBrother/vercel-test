import { Category } from "@/modal";
const category = new Category();

export const categoryService = {

  getCategoryById(id: string) {
    return new Promise<Category['data']>((resolve, reject) => {
      resolve(category.getCategoryById(id));
    })
  }
}
