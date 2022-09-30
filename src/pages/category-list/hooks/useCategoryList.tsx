import { useState, useEffect } from 'react';
import { categoryService } from '@/services/category';
import { TCategoryData } from '@/modal';

export function useCategoryList(categoryId) {
  const [categoryList, setCategoryList] = useState<TCategoryData[]>([]);

  useEffect(() => {
    categoryService.getCategoryById(categoryId).then((category) => {
      setCategoryList(category)
    });
  }, [categoryId])

  return { categoryList }
}