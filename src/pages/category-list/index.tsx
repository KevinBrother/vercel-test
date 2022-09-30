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

function useCategoryList(id = '') {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    categoryService.getCategoryById(id).then((category) => {
      setCategoryList(category)
    });
  }, [id])

  return { categoryList }

}

export default function MenuList() {
  const [categoryId, setCategoryId] = useState('');

  const { render: editDialogRender, setIsModalOpen: setIsEditDialogOpen } = useEditDialog();
  const { columns } = useColumns({ setIsEditDialogOpen, setCategoryId });

  const { categoryList } = useCategoryList(categoryId);

  function onAdd() {
    console.log(1);
  }

  return (
    <PageContainer>
      <Button icon={<PlusOutlined />} type='primary' style={{ marginBottom: '16px' }} onClick={onAdd}>
        创建场景
      </Button>
      <Table striped={true} columns={columns} dataSource={categoryList} rowKey='id' />
      {editDialogRender}
    </PageContainer>
  )
}
