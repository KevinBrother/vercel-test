import { Button } from 'antd'
import { useState } from 'react';
import { PageContainer, Table } from '@bixi-design/core';
import { PlusOutlined } from '@bixi-design/icons';
import { useColumns, useBreadcrumb, useCategoryList, useEditDialog } from './hooks';

export default function MenuList() {
  const [categoryId, setCategoryId] = useState('');
  // 弹框
  const { render: editDialogRender, setIsModalOpen: setIsEditDialogOpen } = useEditDialog();

  // 面包屑
  const { render: breadcrumbRender, addBreadCrumb } = useBreadcrumb({ setCategoryId });

  // 列定义
  const { columns } = useColumns({ setIsEditDialogOpen, setCategoryId, addBreadCrumb });

  // 列表数据
  const { categoryList } = useCategoryList(categoryId);

  function onAdd() {
    setIsEditDialogOpen(true);
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
}
