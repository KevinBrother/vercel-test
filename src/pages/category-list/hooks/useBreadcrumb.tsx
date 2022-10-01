import { ICategory } from '@/stores';
import { Breadcrumb } from 'antd'
import { useImmer } from 'use-immer';

export function useBreadcrumb({ setCategoryId }) {
  const [breadCrumbs, setBreadCrumbs] = useImmer<ICategory[]>([]);

  function addBreadCrumb(category: ICategory) {
    setBreadCrumbs(draft => {
      draft.push(category);
    })
  }

  function handleClick(category: ICategory, index: number) {
    setCategoryId(category.pId);

    setBreadCrumbs(draft => {
      draft.splice(index);
    });
  }

  const render = (
    <Breadcrumb>
      {
        breadCrumbs.map((item, index) => {
          return (
            <Breadcrumb.Item className='cursor-pointer' key={index} onClick={() => handleClick(item, index)}>{item.name}</Breadcrumb.Item>
          )
        })
      }
    </Breadcrumb>
  )

  return { render, addBreadCrumb }
}
