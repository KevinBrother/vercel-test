
import type { ColumnsType } from 'antd/es/table';
import { Button, Space } from 'antd'
import { IfElse } from '@bixi-design/core';
import { EFlag } from '..';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

export function getColumns({ setCurrentBreadCrumbCategory, setIsEditDialogOpen, addBreadCrumb, setFlag }) {
  const columns: ColumnsType<ICategory[]> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'desc',
      dataIndex: 'desc',
      key: 'desc',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <IfElse if={record?.children.length > 0}>
            <Button onClick={() => toNext(record)}>下层菜单</Button>
          </IfElse>
          <Button onClick={() => edit(record)}>编辑</Button>
          <Button onClick={() => deleteCategory(record)}>删除</Button>
        </Space>
      ),
    },
  ]

  function toNext(record) {
    setCurrentBreadCrumbCategory(record);
    addBreadCrumb(record)
  }

  function edit(record) {
    setFlag(EFlag.edit)
    setCurrentBreadCrumbCategory(record)
    setIsEditDialogOpen(true);
  }

  function deleteCategory(record) {
    console.log('delete');
  }

  return { columns }
}