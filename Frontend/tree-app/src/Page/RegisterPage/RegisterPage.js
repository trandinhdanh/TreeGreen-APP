import React from "react";
import { Button, Form, Input, Select,Col, Row, message } from "antd";
import { Link, useNavigate } from 'react-router-dom';
// import "./ResgisterPage.scss";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { authService } from "../../services/authService";
import { loginUser } from "../../Redux/auth/authSlice";
export default function RegisterPage() {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const onFinish = async (values) => {
    try {
      const register = await authService.registerUser(values);
      const infoLogin = {username: values.username,password : values.password}
        dispatch(loginUser(infoLogin))
        console.log(values)
        navigate('/')
      } catch (error) {
        console.log(error);
      }
  };
  const onFinishFailed = (errorInfo) => {
    message.error('Please Enter Full Information')
  };

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
            src="https://res.cloudinary.com/dtsfnikj0/image/upload/v1685087448/pexels-photo-1903965_fapoja.jpg"
            alt=""
          />
        </div>
        <div className="leftLogin lg:w-1/2 md:w-full sm:w-full mb:w-full ">
          <div className="flex flex-col w-2/3 mx-auto items-center">
            <h1 className="text-2xl mb-5 font-mono">{t('Welcome')}</h1>
            <Form
              name="basic"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              layout="vertical"
            >
              <Row gutter={[16, 0]}>
                <Col xs={24} sm={12}>
                  <Form.Item
                    label="Full Name"
                    name="fullName"
                    rules={[
                      {
                        required: true,
                        message: "Please input your full name!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={[16, 0]}>
                
                <Col xs={24} sm={12}>
                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your password!',
                      },
                      {
                        min: 6,
                        message: 'Password must be at least 6 characters!',
                      },
                      {
                        pattern: /^(?=.*\d)/,
                        message: 'Password must contain at least one number!',
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    label="Confirm Password"
                    name="confirmPassword"
                    rules={[
                      {
                        required: true,
                        message: "Please confirm your password!",
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue("password") === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            new Error("The two passwords do not match!")
                          );
                        },
                      }),
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item>
                <Button className="w-full" type="primary" htmlType="submit">
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
              </Form.Item>
            </Form>
          </div>
        </div>
      
       
      </div>
    </div>
  );
}
