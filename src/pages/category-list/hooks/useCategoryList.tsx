import { useState, useEffect } from 'react';
import { categoryService } from '@/services/category';
import { ICategory } from '@/stores';

export function useCategoryList(categoryId) {
  const [categoryList, setCategoryList] = useState<ICategory[]>([]);

  useEffect(() => {
    categoryService.getCategoryById(categoryId).then((category) => {
      setCategoryList(category)
    });
  }, [categoryId])

  return { categoryList }
}