import { Category, TCategoryData } from '@/modal';
import { Breadcrumb } from 'antd'
import React, { useState } from 'react'
import { useImmer } from 'use-immer';


export function useBreadcrumb({ setCategoryId }) {
  const [breadCrumbs, setBreadCrumbs] = useImmer<TCategoryData[]>([]);

  function addBreadCrumb(category: TCategoryData) {
    setBreadCrumbs(draft => {
      draft.push(category);
    })
  }

  function handleClick(category: TCategoryData, index: number) {
    console.log('%c [ category ]-17', 'font-size:13px; background:pink; color:#bf2c9f;', category)
    setCategoryId(category.id);

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
