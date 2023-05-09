import React from "react";
import { Button, Form, Input, Select } from "antd";
import { Link, useNavigate } from 'react-router-dom';
// import "./ResgisterPage.scss";
import { useTranslation } from "react-i18next";
export default function RegisterPage() {
  const {t} = useTranslation()
  const onFinish = (values) => {
    // dispatch(on_loading(12));
  };
  const onFinishFailed = (errorInfo) => {};

  return (
    <div className="loginPage flex items-center justify-center w-full h-screen bg-[#ece6e6]">
      <div className="flex bg-white items-center relative w-4/5 h-3/4 login-wrapper ">
        <div className="absolute top-6 left-6">
          <Link to={"/"}>
              <p className="font-playfair text-[18px] tracking-wider m-0 text-[#263A29]"> 
                <span className="text-primary font-bold">GREEN </span> 
              EARTH
              </p>
          </Link>
        </div>
        <div className="rightLogin h-full w-1/2 md:hidden sm:hidden mb:hidden lg:block">
          <img
            className="w-full h-full object-cover rounded-r-3xl "
            src="https://images.pexels.com/photos/1903965/pexels-photo-1903965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="leftLogin lg:w-1/2 md:w-full sm:w-full mb:w-full ">
          <div className="flex flex-col w-2/3 mx-auto items-center">
            <h1 className="text-2xl mb-5 font-mono">{t('Welcome')}</h1>
            <Form
              name="basic"
              className="form-login "
              labelCol={{
                span: 0,
              }}
              wrapperCol={{
                span: 16,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item 
              name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}>
                <Input
                  className="input border px-[9px] py-[9px] rounded-[0.5rem] w-[320px] input-user"
                  placeholder="Input your email/phone number"
                />
              </Form.Item>

              <Form.Item
              wrapperCol={{ span: 16 }}
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password
                  className="border password px-[9px] py-[9px] rounded-[0.5rem] w-[320px] "
                  placeholder="Input your email/phone number"
                />
              </Form.Item>
              <Form.Item
              wrapperCol={{ span: 16 }}
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password
                  className="border password px-[9px] py-[9px] rounded-[0.5rem] w-[320px] "
                  placeholder="Input your email/phone number"
                />
              </Form.Item>
              <Button
                className="hover:blacks w-full rounded-[0.5rem] bg-[#000] btn-login text-white"
                type="primary"
                size="large"
                htmlType="submit"
              >
                {t('Register')}
              </Button>
              <div className="w-full flex justify-between">
              <Link to="/login" className="mt-2 w-full inline text-left text-sm font-mono hover:text-blue-500">
                {t('Login')}
              </Link>
              <Link to="/" className="mt-2  w-full inline text-right text-sm font-mono hover:text-blue-500">
                {t('home')}
              </Link>
            </div>
            </Form>
          </div>
        </div>
      
       
      </div>
    </div>
  );
}
