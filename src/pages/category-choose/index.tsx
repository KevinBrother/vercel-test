import { Button, Divider, Select, Tag } from 'antd'
import { useState, useCallback } from 'react';
import { PageContainer, Table } from '@bixi-design/core';
import { categoryService } from '@/services/category';
import { observer } from 'mobx-react';
import { cloneDeep } from 'lodash-es';
import { CategoryRootPId, randomChoose } from '@/utils';
import { getColumns } from './getColumns';
import { useRequest } from 'ahooks';
import './index.less';

const { Option } = Select;

function good(e) {
  console.log('[ 1 ] >', e)
}

function useSelectedTags(categoryList: ICategory[]) {
  // const [selectedCategory, setSelectedCategory] = useImmer<ICategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<ICategory[]>([]);

  const startSelect = useCallback(() => {
    if (categoryList.length === 0) {
      return;
    }

    /*     
    // TODO 2022年10月30日 19:05:57 mobx和useImmer怎么才能一起用？
    setSelectedCategory(draft => {
      console.log('%c [ categoryList ]-34', 'font-size:13px; background:pink; color:#bf2c9f;', categoryList, toJS(categoryList))
      draft.push(toJS(categoryList[0]));
    })
    */

    const _selectedCategory = cloneDeep(selectedCategory);
    _selectedCategory.push(randomChoose(categoryList));
    setSelectedCategory(_selectedCategory);

  }, [categoryList, selectedCategory])

  const removeSelected = useCallback(() => {

  }, [])

  return { selectedCategory, setSelectedCategory, startSelect, removeSelected }
}

function useRootCategory() {
  const [rootCategory, setRootCategory] = useState<ICategory[]>([]);

  // 下拉选项数据
  useRequest(() => categoryService.getChildrenByCategoryId(CategoryRootPId), {
    onSuccess(categoryList) {
      setRootCategory(categoryList)
    },
  });

  return { rootCategory, setRootCategory }
}

function useTableData(currentCategoryId: string) {
  const [tableData, setTableData] = useState<ICategory[]>([]);

  useRequest(() => categoryService.getChildrenByCategoryId(currentCategoryId), {
    onSuccess(categoryList) {
      setTableData(categoryList)
    },
    refreshDeps: [currentCategoryId]
  });
  return { tableData }
}

export default observer(function CategoryChoose() {
  // 下拉选项数据
  const { rootCategory } = useRootCategory();

  // 默认根类目的第一个参数
  const [currentCategoryId, setCurrentCategoryId] = useState(rootCategory.length > 0 ? rootCategory[0].id : '');

  // 列定义
  const { columns } = getColumns();

  // 列表
  const { tableData } = useTableData(currentCategoryId)

  // 选项数据
  const { selectedCategory, startSelect } = useSelectedTags(tableData);

  return (
    <PageContainer className='category-choose-container'>
      <div className='flex'>
        <div>已选： </div>
        <div className="select-tags">
          {
            selectedCategory.map(({ id, name }, index) => (
              <Tag closable key={index} onClose={() => good(id)}>
                {name}
              </Tag>
            ))
          }
        </div>
      </div>

      <div className='mt-10'>
        <div>
          {/* // TODO 默认选中第一个 */}
          <Select
            defaultValue={rootCategory.length > 0 ? rootCategory[0].id : ''}
            style={{ width: 120 }}
            onChange={(value: string) => setCurrentCategoryId(value)}>
            {
              rootCategory.map((item, index) => {
                return <Option key={index} value={item.id}>{item.name}</Option>
              })
            }
          </Select>
          <Button className='ml-20' type="primary" onClick={startSelect}>开选</Button>
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
})
