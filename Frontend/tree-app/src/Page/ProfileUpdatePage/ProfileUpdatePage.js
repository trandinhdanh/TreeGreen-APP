import React, { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { userService } from '../../services/userService';
import { localStorageService } from '../../services/localStorageService';
import { setLoading } from '../../Redux/loading/loadingSlice';
import { logoutUser } from '../../Redux/auth/authSlice';

export default function ProfileUpdatePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [user, setUser] = useState(localStorageService.get('USER').userDTO);

  useEffect(() => {
    const fetchUserProfile = async () => {
      form.setFieldsValue({
        fullName: user.fullName,
        email: user.email,
        numberPhone: user.numberPhone,
        address: user.address,
      });
    };
    fetchUserProfile();
  }, []);

  const onFinish = (values) => {
    console.log('Form submitted:', values);
    const formData = new FormData();
    formData.append('avatar', selectedAvatar);
    formData.append('fullName', values.fullName);
    formData.append('email', values.email);
    formData.append('numberPhone', values.numberPhone);
    formData.append('address', values.address);

    dispatch(setLoading(true));
    userService
      .update(user.username, formData)
      .then((res) => {
        dispatch(logoutUser())
        dispatch(setLoading(false));
        console.log(res);
      })
      .catch((err) => {
        dispatch(setLoading(false));
        console.log(err);
      });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setSelectedAvatar(file);
  };

  const labelCol = { span: 4 };
  const wrapperCol = { span: 16 };

  return (
    <div className='mt-24 container mx-auto px-24  '>
    <h1 className='font-bold text-[25px] my-5 text-center text-primary uppercase'>Profile User</h1>
      <Form form={form} onFinish={onFinish}>
        
      <Form.Item
          label="Hình ảnh"
          name="avatar"
          labelCol={labelCol}
          wrapperCol={wrapperCol}
        >
          <input type="file" accept="image/*" onChange={handleAvatarChange} />
        </Form.Item>

        <Form.Item
          label='Fullname'
          name='fullName'
          rules={[{ required: true }]}
          labelCol={labelCol}
          wrapperCol={wrapperCol}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Email'
          name='email'
          rules={[{ required: true, type: 'email' }]}
          labelCol={labelCol}
          wrapperCol={wrapperCol}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Number Phone'
          name='numberPhone'
          rules={[{ required: true }]}
          labelCol={labelCol}
          wrapperCol={wrapperCol}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Address'
          name='address'
          labelCol={labelCol}
          wrapperCol={wrapperCol}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: labelCol.span, span: wrapperCol.span }}>
          <Button type='primary' htmlType='submit'>
            Update
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
