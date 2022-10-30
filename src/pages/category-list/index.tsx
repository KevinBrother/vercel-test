import { Button } from 'antd'
import { useState } from 'react';
import { PageContainer, Table } from '@bixi-design/core';
import { PlusOutlined } from '@bixi-design/icons';
import { observer } from 'mobx-react';
import { getColumns, useBreadcrumb, useCategoryList, CategoryBreadcrumb, EditDialog } from './hooks';
import { cloneDeep } from 'lodash-es';
import { CategoryRootPId } from '@/utils';

export enum EFlag {
  add = 'ADD',
  edit = 'EDIT'
}

export const defaultCategory: ICategory = {
  id: CategoryRootPId,
  pId: '',
  children: [],
  name: '',
  desc: ''
}

export default observer(function MenuList() {
  const [currentCategory, setCurrentCategory] = useState<ICategory>(defaultCategory);
  const [editCategory, setEditCategory] = useState<ICategory>(defaultCategory);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [breadCrumbs, setBreadCrumbs] = useState<ICategory[]>([]);

  function addBreadCrumb(category: ICategory) {
    const _breadCrumbs = cloneDeep(breadCrumbs);
    _breadCrumbs.push(category);
    setBreadCrumbs(_breadCrumbs);
  }

  const [flag, setFlag] = useState(EFlag.add);
  // TODO 2022年10月2日 12:30:53 纯hooks换成组件+hooks看看效果会不会更好
  // 列表数据
  const { categoryList, runGetCategoryById, refreshGetCategoryById } = useCategoryList({ currentCategory });

  // 列定义
  const { columns } = getColumns({
    setEditCategory,
    setIsEditDialogOpen,
    setFlag,
    refreshGetCategoryById,
    setCurrentCategory,
    addBreadCrumb
  });

  function onAdd() {
    setIsEditDialogOpen(true);
    setFlag(EFlag.add);
  }

  function randomChoose( ) {
      const shuffled = categoryList.slice(0);
      let i = categoryList.length;
      const min = i - 1;
      let temp, index;  //只是声明变量的方式, 也可以分开写
      while (i-- > min) {
          index = Math.floor((i + 1) * Math.random()); //这里的+1 是因为上面i--的操作  所以要加回来
          temp = shuffled[index];  //即值交换
          shuffled[index] = shuffled[i]; 
          shuffled[i] = temp;
      }
      return shuffled.slice(min);
    }

  return (
    <PageContainer>
      <div className='mb-6 flex justify-between'>
        <CategoryBreadcrumb
          breadCrumbs={breadCrumbs}
          setBreadCrumbs={setBreadCrumbs}
          setCurrentCategory={setCurrentCategory}
        />
        <Button  type='primary' onClick={randomChoose}>
          随机选菜
        </Button>
        <Button icon={<PlusOutlined />} type='primary' onClick={onAdd}>
          创建类目
        </Button>
      </div>
      <Table striped={true} columns={columns} dataSource={categoryList} rowKey='id' />
      <EditDialog
        editCategory={editCategory}
        currentCategory={currentCategory}
        isEditDialogOpen={isEditDialogOpen}
        setIsEditDialogOpen={setIsEditDialogOpen}
        refreshGetCategoryById={refreshGetCategoryById}
        flag={flag}
      />

    </PageContainer>
  )
}) 
