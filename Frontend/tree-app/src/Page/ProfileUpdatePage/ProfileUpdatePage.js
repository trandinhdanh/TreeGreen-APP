import React, { useEffect } from 'react';
import { Form, Input, Button, Modal, message } from 'antd';
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
  const [changePasswordVisible, setChangePasswordVisible] = useState(false);
  const [changePasswordForm] = Form.useForm();
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
  const handleChangePassword = () => {
    changePasswordForm.validateFields().then((values) => {
      let request = {...values , username  : user.username }
      userService.changePassword(request).then((res) => {
        console.log('Change password form submitted:', request);
              console.log(res);
              message.success("Success")
              changePasswordForm.resetFields()
              setChangePasswordVisible(false);
            })
            .catch((err) => {
              console.log(err);
              message.error("Error")
            });
      })
      .catch((error) => {
        message.error('Error in change password form:', error);
      });
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
          <div className='flex justify-between'>
          <Button type='primary' htmlType='submit'>
            Update
          </Button>
          <Button onClick={() => setChangePasswordVisible(true)}>Change Password</Button>
          </div>
        </Form.Item>
      </Form>
      
    <Modal
      title="Change Password"
      visible={changePasswordVisible}
      onCancel={() => setChangePasswordVisible(false)}
      onOk={handleChangePassword}
    >
      <Form form={changePasswordForm}>
        <Form.Item
          label="Old Password"
          name="passwordOld"
          rules={[{ required: true, message: 'Please enter your old password' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="New Password"
          name="passwordNew"
          rules={[{ required: true, message: 'Please enter your new password' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Confirm New Password"
          name="confirmPasswordNew"
          dependencies={['passwordNew']}
          rules={[
            { required: true, message: 'Please confirm your new password' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('passwordNew') === value) {
                  return Promise.resolve();
                }
                return Promise.reject('The two passwords do not match');
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
      </Form>
    </Modal>
    </div>
  );
}
