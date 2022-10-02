import { useState, useEffect } from 'react';
import { categoryService } from '@/services/category';
import { useRequest } from 'ahooks';

export function useCategoryList({ parentCategory }) {
  const [categoryList, setCategoryList] = useState<ICategory[]>([]);

  const { run: runGetCategoryById, refresh: refreshGetCategoryById } = useRequest(() => categoryService.getCategoryById(parentCategory.id), {
    onSuccess(categoryList) {
      console.log('%c [ categoryList ]-10', 'font-size:13px; background:pink; color:#bf2c9f;', categoryList)
      setCategoryList(categoryList)
    },
    refreshDeps: [parentCategory]
  });

  /*  useEffect(() => {
     categoryService.getCategoryById(categoryId).then((category) => {
       setCategoryList(category)
     });
   }, [categoryId]) */

  return { categoryList, runGetCategoryById, refreshGetCategoryById }
}