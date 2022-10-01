import { useState, useEffect } from 'react';
import { categoryService } from '@/services/category';
import { useRequest } from 'ahooks';

export function useCategoryList(categoryId) {
  const [categoryList, setCategoryList] = useState<ICategory[]>([]);

  const { data, run: getCategoryById } = useRequest(() => categoryService.getCategoryById(categoryId), {
    onSuccess(category) {
      setCategoryList(category)
    },
    refreshDeps: [categoryId]
  });

  /*  useEffect(() => {
     categoryService.getCategoryById(categoryId).then((category) => {
       setCategoryList(category)
     });
   }, [categoryId]) */

  return { categoryList, getCategoryById }
}