import { Breadcrumb } from 'antd'
import { cloneDeep } from 'lodash-es';
import { useState } from 'react';
import { useImmer } from 'use-immer';

export function useBreadcrumb() {
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


  return { breadCrumbs, addBreadCrumb }
}

export function CategoryBreadcrumb({ breadCrumbs, setParentCategory, setBreadCrumbs }) {

  function chooseBreadCrumb(category: ICategory, index: number) {
    const _breadCrumbs = cloneDeep(breadCrumbs);
    _breadCrumbs.splice(index);

    if (_breadCrumbs.length === 0) {
      setParentCategory({})
    } else {
      setParentCategory(category)
    }
    setBreadCrumbs(_breadCrumbs);
  }

  function chooseHome() {
    // TODO 2022年10月3日 00:42:48 初始值需要定义
    setParentCategory({})
    setBreadCrumbs([])
  }

  return (
    <Breadcrumb>
      <Breadcrumb.Item className='cursor-pointer' onClick={chooseHome} >HOME</Breadcrumb.Item>
      {
        breadCrumbs.map((item, index) => {
          return (
            <Breadcrumb.Item className='cursor-pointer' key={index} onClick={() => chooseBreadCrumb(item, index)}>{item.name}</Breadcrumb.Item>
          )
        })
      }
    </Breadcrumb>
  )
}