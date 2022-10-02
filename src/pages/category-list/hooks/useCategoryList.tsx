import { useState, useEffect } from 'react';
import { categoryService } from '@/services/category';
import { useRequest } from 'ahooks';

export function useCategoryList(categoryId) {
  const [categoryList, setCategoryList] = useState<ICategory[]>([]);

  const { data, run: runGetCategoryById, refresh: refreshGetCategoryById } = useRequest(() => categoryService.getCategoryById(categoryId), {
    onSuccess(category) {
      console.log('%c [ category ]-10', 'font-size:13px; background:pink; color:#bf2c9f;', category)
      setCategoryList(category)
    },
    refreshDeps: [categoryId]
  });

  /*  useEffect(() => {
     categoryService.getCategoryById(categoryId).then((category) => {
       setCategoryList(category)
     });
   }, [categoryId]) */

  return { categoryList, runGetCategoryById, refreshGetCategoryById }
}