import { Button, Divider, Select, Tag } from 'antd'
import { useState } from 'react';
import { PageContainer, Table } from '@bixi-design/core';
import { categoryService } from '@/services/category';
import { PlusOutlined } from '@bixi-design/icons';
import { observer } from 'mobx-react';
import { cloneDeep } from 'lodash-es';
import { CategoryRootPId } from '@/utils';
import { getColumns } from './getColumns';
import { useRequest } from 'ahooks';
import './index.less';

const { Option } = Select;

function good(e) {
  console.log('[ 1 ] >', e)
}

function useSelectedTags() {
  const [selectedCategory, setSelectedCategory] = useState<ICategory[]>([]);

  // 下拉选项数据
  useRequest(() => categoryService.getChildrenByCategoryId(CategoryRootPId), {
    onSuccess(categoryList) {
      setSelectedCategory(categoryList)
    },
  });

  return { selectedCategory, setSelectedCategory }
}

function useTableData(currentCategoryId: string) {
  const [tableData, setTableData] = useState<ICategory[]>([]);

  useRequest(() => categoryService.getChildrenByCategoryId(currentCategoryId), {
    onSuccess(categoryList) {
      console.log('%c [ categoryList ]-28', 'font-size:13px; background:pink; color:#bf2c9f;', categoryList)
      setTableData(categoryList)
    },
    refreshDeps: [currentCategoryId]
  });
  return { tableData }

}

export default function CategoryChoose() {
  // TODO 得获取第一个参数
  const [currentCategoryId, setCurrentCategoryId] = useState('');
  const [categoryList, setCategoryList] = useState<ICategory[]>([]);

  // 列定义
  const { columns } = getColumns();

  // 下拉选项数据
  const { selectedCategory } = useSelectedTags();

  // 列表
  const { tableData } = useTableData(currentCategoryId)

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
          {/* // TODO 默认选中第一个 */}
          <Select
            defaultValue={categoryList.length > 0 ? categoryList[0].id : ''}
            style={{ width: 120 }}
            onChange={(value: string) => setCurrentCategoryId(value)}>
            {
              selectedCategory.map((item, index) => {
                return <Option key={index} value={item.id}>{item.name}</Option>
              })
            }
          </Select>
          <Button className='ml-20' type="primary">开选</Button>
        </div>
        <Divider />
        <Table
          striped={true}
          columns={columns}
          dataSource={tableData}
          expandable={{ showExpandColumn: false }}
          rowKey='id'
        />
      </div>
    </PageContainer >
  )
}
