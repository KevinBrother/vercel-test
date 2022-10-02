
import type { ColumnsType } from 'antd/es/table';
import { Button, Space } from 'antd'
import { IfElse } from '@bixi-design/core';
import { ICategory } from '@/stores';
import { EFlag } from '..';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

export function useColumns({ setIsEditDialogOpen, setCategoryId, addBreadCrumb, setCategory, setFlag }) {
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
          <Button onClick={() => handleClick(record)}>删除</Button>
        </Space>
      ),
    },
  ]

  function toNext(record) {

    setCategoryId(record.id);
    setCategory(record);
    addBreadCrumb(record)
  }

  function edit(record) {
    setFlag(EFlag.edit)
    setCategory(record)
    setIsEditDialogOpen(true);
  }

  function handleClick(record) {
    console.log(record);
    setIsEditDialogOpen(true);
  }

  return { columns }
}