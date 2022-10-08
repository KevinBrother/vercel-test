import { Button } from 'antd'
import { useState } from 'react';
import { PageContainer, Table } from '@bixi-design/core';
import { PlusOutlined } from '@bixi-design/icons';
import { observer } from 'mobx-react';
import { getColumns, useBreadcrumb, useCategoryList, CategoryBreadcrumb, EditDialog } from './hooks';
import { cloneDeep } from 'lodash-es';

export enum EFlag {
  add = 'ADD',
  edit = 'EDIT'
}

export default observer(function MenuList() {
  const [parentCategory, setParentCategory] = useState<ICategory>({});
  const [currentCategory, setCurrentCategory] = useState<ICategory>({});
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
  const { categoryList, runGetCategoryById, refreshGetCategoryById } = useCategoryList({ parentCategory });

  // 列定义
  const { columns } = getColumns({
    setIsEditDialogOpen,
    setParentCategory,
    setFlag,
    refreshGetCategoryById,
    setCurrentCategory,
    addBreadCrumb
  });

  function onAdd() {
    setIsEditDialogOpen(true);
    setFlag(EFlag.add);
  }

  return (
    <PageContainer>
      <div className='mb-6 flex justify-between'>
        <CategoryBreadcrumb
          breadCrumbs={breadCrumbs}
          setBreadCrumbs={setBreadCrumbs}
          setParentCategory={setParentCategory}
        />
        <Button icon={<PlusOutlined />} type='primary' onClick={onAdd}>
          创建类目
        </Button>
      </div>
      <Table striped={true} columns={columns} dataSource={categoryList} rowKey='id' />
      <EditDialog
        currentCategory={currentCategory}
        parentCategory={parentCategory}
        isEditDialogOpen={isEditDialogOpen}
        setIsEditDialogOpen={setIsEditDialogOpen}
        refreshGetCategoryById={refreshGetCategoryById}
        flag={flag}
      />

    </PageContainer>
  )
}) 
