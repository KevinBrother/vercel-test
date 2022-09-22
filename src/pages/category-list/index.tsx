import { Button, Space } from 'antd'
import type { ColumnsType } from 'antd/es/table';
import { mock, Random } from 'mockjs';
import { PageContainer, Table } from '@bixi-design/core';
import { PlusOutlined } from '@bixi-design/icons';
import EditDialog from './components/edit-dialog';
import { useEditDialog } from './hooks/edit-dialog';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

var mockData = mock({
  "list|1-10": [
    {
      key: '@increment(1)',
      age: '@integer(20, 70)',
      name: "@ctitle",
      address: "@cparagraph",
      "add_time": "@date(yyyy-MM-dd hh:mm:ss)",
    }
  ]
})


export default function MenuList() {

  const { render: editDialogRender, setIsModalOpen: setIsEditDialogOpen } = useEditDialog();

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => handleClick(record)}>下层菜单</Button>
          <Button onClick={() => handleClick(record)}>编辑</Button>
          <Button onClick={() => handleClick(record)}>删除</Button>
        </Space>
      ),
    },
  ]

  function onAdd() {
    console.log(1);
  }

  function handleClick(record) {
    console.log(record);
    setIsEditDialogOpen(true);
  }

  return (
    <PageContainer>
      <Button icon={<PlusOutlined />} type='primary' style={{ marginBottom: '16px' }} onClick={onAdd}>
        创建场景
      </Button>
      <Table striped={true} columns={columns} dataSource={mockData.list} />
      {editDialogRender}
    </PageContainer>
  )
}
