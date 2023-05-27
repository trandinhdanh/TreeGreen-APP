import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function NewBlogManagerPage() {
  const [form] = Form.useForm();
  const [content, setContent] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const onFinish = (values) => {
    console.log('Form submitted:', values);
    // Perform additional logic or API calls for submitting the blog post
  };

  const handleChangeContent = (value) => {
    console.log(value);
    setContent(value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setSelectedImage(file);
  };

  const labelCol = { span: 4 };
  const wrapperCol = { span: 16 };

  return (
    <div className='w-full'>
    <h1 className='uppercase font-bold text-primary text-[20px] text-center my-5'>new blog</h1>
      <Form form={form} onFinish={onFinish}>
        <Form.Item
          label="Title Blog"
          name="title"
          rules={[{ required: true, message: 'Please enter the title of the blog' }]}
          labelCol={labelCol}
          wrapperCol={wrapperCol}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Hình ảnh"
          name="image"
          labelCol={labelCol}
          wrapperCol={wrapperCol}
          rules={[
            () => ({
              validator(_, value) {
                if (selectedImage || value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Vui lòng chọn hình ảnh'));
              },
            }),
          ]}
        >
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </Form.Item>

        <Form.Item
          label="Nội dung"
          name="content"
          labelCol={labelCol}
          wrapperCol={wrapperCol}
        >
          <ReactQuill value={content} onChange={handleChangeContent} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: labelCol.span, span: wrapperCol.span }}>
          <Button type="primary" htmlType="submit">
            Add Blog
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
