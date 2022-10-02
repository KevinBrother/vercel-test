import { Button } from 'antd'
import { useState } from 'react';
import { PageContainer, Table } from '@bixi-design/core';
import { PlusOutlined } from '@bixi-design/icons';
import { observer } from 'mobx-react';
import { useColumns, useBreadcrumb, useCategoryList, useEditDialog } from './hooks';

export enum EFlag {
  add = 'ADD',
  edit = 'EDIT'
}

export default observer(function MenuList() {
  const [categoryId, setCategoryId] = useState('');
  const [category, setCategory] = useState<ICategory>({});
  const [flag, setFlag] = useState(EFlag.add);
  // TODO 2022年10月2日 12:30:53 纯hooks换成组件+hooks看看效果会不会更好
  // 列表数据
  const { categoryList, runGetCategoryById, refreshGetCategoryById } = useCategoryList(categoryId);

  // 弹框
  const { render: editDialogRender, setIsModalOpen: setIsEditDialogOpen } = useEditDialog({ runGetCategoryById, category, flag, refreshGetCategoryById });

  // 面包屑
  const { render: breadcrumbRender, addBreadCrumb } = useBreadcrumb({ setCategoryId, setCategory });

  // 列定义
  const { columns } = useColumns({ setIsEditDialogOpen, setCategoryId, addBreadCrumb, setCategory, setFlag });

  function onAdd() {
    setIsEditDialogOpen(true);
    setFlag(EFlag.add);
  }

  return (
    <PageContainer>
      <div className='mb-6 flex justify-between'>

        {breadcrumbRender}
        <Button icon={<PlusOutlined />} type='primary' onClick={onAdd}>
          创建类目
        </Button>
      </div>
      <Table striped={true} columns={columns} dataSource={categoryList} rowKey='id' />
      {editDialogRender}
    </PageContainer>
  )
}) 
