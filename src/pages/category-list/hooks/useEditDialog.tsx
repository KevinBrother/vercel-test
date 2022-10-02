import { categoryService } from '@/services/category';
import { Button, Modal, Checkbox, Form, Input } from 'antd';
import { FormInstance } from 'antd/es/form/Form';
import { v4 } from 'uuid'
import React, { useState } from 'react';
import { useEffect } from 'react';
import { EFlag } from '..';
import { useRequest } from 'ahooks';

/* export function useEditDialog({ runGetCategoryById, category, flag, refreshGetCategoryById }) {

  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);


  return { isEditDialogOpen, setIsEditDialogOpen, onFinish, form }
}; */

export function EditDialog({ breadCrumbCategory, isEditDialogOpen, setIsEditDialogOpen, refreshGetCategoryById, flag }) {

  useEffect(() => {
    // TODO 包装对象
    let initialValues = {}
    if (isEditDialogOpen) {
      // 编辑和修改不一样！！！
      if (flag === EFlag.add) {
        // TODO pId 初始值
        initialValues.pId = breadCrumbCategory.id || '';
        initialValues.id = v4();
        initialValues.children = [];
        console.log('%c [ initialValues ]-23', 'font-size:13px; background:pink; color:#bf2c9f;', initialValues)
      } else {
        initialValues = { ...breadCrumbCategory }
      }
      // TODO 2022年10月2日 12:48:41 判断是否有id和pid
      form.setFieldsValue(initialValues)
    }

    return () => {
      form.resetFields()
    }

  }, [breadCrumbCategory, isEditDialogOpen])


  const [form] = Form.useForm();

  const { run: runAddCategoryById } = useRequest(() => categoryService.addCategoryById(form.getFieldsValue(), breadCrumbCategory.id), {
    manual: true,
    onSuccess() {
      // runGetCategoryById(category.id);
      refreshGetCategoryById();
      handleCancel();
    }
  });

  const { run: runEditCategoryById } = useRequest(() => categoryService.editCategory(form.getFieldsValue()), {
    manual: true,
    onSuccess() {
      refreshGetCategoryById();
      handleCancel();
    }
  });

  const handleCancel = () => {
    setIsEditDialogOpen(false);
  };

  const onFinish = (form: FormInstance) => {
    form.validateFields().then(rst => {
      if (EFlag.add === flag) {
        runAddCategoryById()
      } else {
        runEditCategoryById()
      }
    }).catch(err => {
      console.log('[ err ] >', err)
    })
  };

  return (
    <Modal
      title="创建/编辑类目"
      open={isEditDialogOpen}
      onOk={() => onFinish(form)}
      onCancel={() => setIsEditDialogOpen(false)}
      getContainer={false}>
      <Form
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 18 }}
        autoComplete="off"
      >
        <Form.Item
          label="name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="desc"
          name="desc"
          rules={[{ required: true, message: 'Please input your desc!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          // hidden={true}
          label="id"
          name="id"
          rules={[{ required: true }]}
        >
        </Form.Item>
        <Form.Item
          // hidden={true}
          label="pId"
          name="pId"
        >
        </Form.Item>

        <Form.Item
          // hidden={true}
          label="children"
          name="children"
        >
        </Form.Item>

      </Form>
    </Modal>
  )
}
