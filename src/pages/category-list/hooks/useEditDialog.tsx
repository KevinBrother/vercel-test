import { categoryService } from '@/services/category';
import { Button, Modal, Checkbox, Form, Input } from 'antd';
import { FormInstance } from 'antd/es/form/Form';
import { v4 } from 'uuid'
import React, { useState } from 'react';
import { useEffect } from 'react';

export function useEditDialog({ categoryId, getCategoryById }) {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    console.log('changes......')
  }, [categoryId, isModalOpen])


  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (form: FormInstance) => {
    form.validateFields().then(rst => {
      categoryService.addCategoryById(form.getFieldsValue(), categoryId)
      getCategoryById(categoryId);
      handleCancel();
    }).catch(err => {
      console.log('[ err ] >', err)
    })
  };

  const render = (
    <Modal
      title="创建/编辑类目"
      open={isModalOpen}
      onOk={() => onFinish(form)}
      onCancel={handleCancel}
      getContainer={false}>
      <Form
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 18 }}
        initialValues={{ pId: categoryId, id: v4(), children: [] }}
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
          hidden={true}
          label="id"
          name="id"
          rules={[{ required: true }]}
        >
        </Form.Item>
        <Form.Item
          hidden={true}
          label="pId"
          name="pId"
        >
        </Form.Item>

        <Form.Item
          hidden={true}
          label="children"
          name="children"
        >
        </Form.Item>

      </Form>
    </Modal>
  );

  return { render, setIsModalOpen }
};
