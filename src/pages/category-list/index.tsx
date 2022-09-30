import { Button, Space } from 'antd'
import type { ColumnsType } from 'antd/es/table';
import { mock, Random } from 'mockjs';
import { PageContainer, Table } from '@bixi-design/core';
import { PlusOutlined } from '@bixi-design/icons';
import EditDialog from './components/edit-dialog';
import { useEditDialog } from './hooks/useEditDialog';
import { useState, useEffect } from 'react';
import { categoryService } from '@/services/category';
import { useColumns } from './hooks/useTableData';
import { TCategoryData } from '@/modal';
import { useBreadcrumb } from './hooks/useBreadcrumb';

function useCategoryList(id = '') {
  const [categoryList, setCategoryList] = useState<TCategoryData[]>([]);

  useEffect(() => {
    categoryService.getCategoryById(id).then((category) => {
      setCategoryList(category)
    });
  }, [id])

  return { categoryList }
}

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
    console.log(1);
  }

  return (
    <PageContainer>
      <div className='mb-6 flex justify-between'>

        {breadcrumbRender}
        <Button icon={<PlusOutlined />} type='primary' onClick={onAdd}>
          创建场景
        </Button>
      </div>
      <Table striped={true} columns={columns} dataSource={categoryList} rowKey='id' />
      {editDialogRender}
    </PageContainer>
  )
}
