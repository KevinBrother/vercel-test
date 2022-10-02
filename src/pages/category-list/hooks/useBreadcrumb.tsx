import { Breadcrumb } from 'antd'
import { cloneDeep } from 'lodash-es';
import { useState } from 'react';
import { useImmer } from 'use-immer';

export function useBreadcrumb({ setCategoryId, setCategory }) {
  /* 
    // TODO 2022年10月1日 18:37:25 为什么用immer会报mobx的错？？
    const [breadCrumbs, setBreadCrumbs] = useImmer<ICategory[]>([]);
    function addBreadCrumb(category: ICategory) {
      setBreadCrumbs(draft => {
        draft.push(category);
      })
    }
    function handleClick(category: ICategory, index: number) {
      setCategoryId(category.pId);
      setBreadCrumbs((draft, index) => {
        draft.splice(index);
      });
    }
   */

  const [breadCrumbs, setBreadCrumbs] = useState<ICategory[]>([]);

  function addBreadCrumb(category: ICategory) {
    const _breadCrumbs = cloneDeep(breadCrumbs);
    _breadCrumbs.push(category);

    setBreadCrumbs(_breadCrumbs);
  }

  function handleClick(category: ICategory, index: number) {
    const _breadCrumbs = cloneDeep(breadCrumbs);
    _breadCrumbs.splice(index);

    if (_breadCrumbs.length === 0) {
      setCategory({})
    }
    setCategoryId(category.pId);
    setBreadCrumbs(_breadCrumbs);
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
