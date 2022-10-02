import { Button, Modal, Checkbox, Form, Input } from 'antd';
import React, { useState } from 'react';

const EditDialog: React.FC = () => {
  console.log('[ 111 ] >', 111)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const showModal = () => {
    setIsEditDialogOpen(true);
  };

  const handleOk = () => {
    setIsEditDialogOpen(false);
  };

  const handleCancel = () => {
    setIsEditDialogOpen(false);
  };

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <>
      <Modal title="Basic Modal" open={isEditDialogOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
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
        </Form>
      </Modal>
    </>
  );
};

export default EditDialog;