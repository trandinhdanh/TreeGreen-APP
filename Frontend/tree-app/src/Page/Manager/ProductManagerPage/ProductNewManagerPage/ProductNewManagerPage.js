import React, { useEffect } from 'react';
import { Form, Input, Upload, Button, Select } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { productService } from '../../../../services/productService';
import { localStorageService } from '../../../../services/localStorageService';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../../../Redux/loading/loadingSlice';

export default function ProductNewManagerPage() {
  const [form] = Form.useForm();
  const dispatch = useDispatch()
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [user,setUser] = useState(localStorageService.get("USER"))
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

    selectedImages.forEach((file, index) => {
      formData.append(`images`, file);
    });
    dispatch(setLoading(true)); 
    productService.create(user.userDTO.id,formData)
    .then((res) => {
    dispatch(setLoading(false)); 
    form.resetFields()
    console.log(res);
  })
  .catch((err) => {
        dispatch(setLoading(false)); 
        console.log(err);
      });
  };
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await productService.getCategory();
        setCategories(response);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchCategories();
  }, []);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setSelectedImage(file);
  };

  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedImages(files);
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
  <Select>
    {categories?.map((category) => (
      <Select.Option key={category.id} value={category.code}>
        {category.name}
      </Select.Option>
    ))}
  </Select>
</Form.Item>
        <Form.Item
          label="Ảnh khác"
          name="images"
          labelCol={labelCol}
          wrapperCol={wrapperCol}
        >
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImagesChange}
          />
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
