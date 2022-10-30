import { Button, Divider, Select, Tag } from 'antd'
import { useState } from 'react';
import { PageContainer, Table } from '@bixi-design/core';
import { PlusOutlined } from '@bixi-design/icons';
import { observer } from 'mobx-react';
import { cloneDeep } from 'lodash-es';
import { CategoryRootPId } from '@/utils';
import { getColumns } from './getColumns';
import './index.less';

const { Option } = Select;

function good() {
  console.log('[ 1 ] >', 1)
}
export default function CategoryChoose() {

  // 列定义
  const { columns } = getColumns();

  // 列表数据
  // const { categoryList, runGetCategoryById, refreshGetCategoryById } = useCategoryList({ currentCategory });


  return (
    <PageContainer className='category-choose-container'>
      <div className='flex'>
        <div>已选： </div>
        <div className="select-tags">
          <Tag closable onClose={good}>
            Tag 2
          </Tag>
          <Tag closable onClose={good}>
            Prevent Default
          </Tag>
        </div>
      </div>
      <div>
        <div>
          <Select defaultValue="lucy" style={{ width: 120 }} onChange={good}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
              Disabled
            </Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
          <Button className='ml-20' type="primary">开选</Button>
        </div>
        <Divider />
        table
      </div>
      {/*   <Table
        striped={true}
        columns={columns}
        dataSource={categoryList}
        expandable={{ showExpandColumn: false }}
        rowKey='id'
      /> */}
    </PageContainer>
  )
}
