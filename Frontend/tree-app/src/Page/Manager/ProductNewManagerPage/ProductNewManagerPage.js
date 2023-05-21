import React from 'react';
import { Form, Input, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { productService } from '../../../services/productService';

export default function ProductNewManagerPage() {
  const [form] = Form.useForm();
  const [selectedImage, setSelectedImage] = useState(null);

  const onFinish = (values) => {
    console.log('Form submitted:', values);
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('code', values.code);
    formData.append('image', selectedImage);
    formData.append('price', values.price);
    formData.append('quantity', values.quantity);
    formData.append('shortDescription', values.shortDescription);
    formData.append('description', values.description);
    formData.append('category', values.category);

   productService.create(formData).then((res) => {
           console.log(res);
         })
         .catch((err) => {
           console.log(err);
         });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    // Lưu trữ tệp tin ảnh vào state hoặc formData
    setSelectedImage(file)
  };

  const labelCol = { span: 4 };
  const wrapperCol = { span: 16 };

  return (
    <div className='w-full'>
      <Form form={form} onFinish={onFinish}>
        <Form.Item
          label="Tên sản phẩm"
          name="name"
          rules={[{ required: true }]}
          labelCol={labelCol}
          wrapperCol={wrapperCol}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mã sản phẩm"
          name="code"
          rules={[{ required: true }]}
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
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </Form.Item>
        <Form.Item
          label="Giá"
          name="price"
          rules={[{ required: true }]}
          labelCol={labelCol}
          wrapperCol={wrapperCol}
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item
          label="Số lượng"
          name="quantity"
          rules={[{ required: true }]}
          labelCol={labelCol}
          wrapperCol={wrapperCol}
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item
          label="Mô tả ngắn"
          name="shortDescription"
          labelCol={labelCol}
          wrapperCol={wrapperCol}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="Mô tả"
          name="description"
          labelCol={labelCol}
          wrapperCol={wrapperCol}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="Danh mục"
          name="category"
          rules={[{ required: true }]}
          labelCol={labelCol}
          wrapperCol={wrapperCol}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: labelCol.span, span: wrapperCol.span }}>
          <Button type="primary" htmlType="submit">
            Thêm sản phẩm
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
