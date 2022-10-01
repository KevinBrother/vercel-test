import { categoryService } from '@/services/category';
import { Button, Modal, Checkbox, Form, Input } from 'antd';
import { FormInstance } from 'antd/es/form/Form';
import React, { useState } from 'react';

export function useEditDialog({ categoryId }) {
  console.log('%c [ categoryId ]-6', 'font-size:13px; background:pink; color:#bf2c9f;', categoryId)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  // form.setFieldValue('pId', categoryId);
  // form.setFieldsValue('pId', categoryId);

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
    console.log('Success:', form);
    form.validateFields().then(rst => {
      console.log('[ rst ] >', rst);
      categoryService.addCategoryById(values, categoryId)
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
        initialValues={{ pId: categoryId }}
        autoComplete="off"
      >
        <Form.Item
          // hidden={true}
          label="pId"
          name="pId"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
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
      </Form>
    </Modal>
  );

  return { render, setIsModalOpen }
};
