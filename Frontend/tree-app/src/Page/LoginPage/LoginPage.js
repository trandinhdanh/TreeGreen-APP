import React, { useEffect } from "react";
import { Button, Form, Input, Select } from "antd";
import { Link, useNavigate } from 'react-router-dom';
import "./LoginPage.scss";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Redux/auth/authSlice";
import { localStorageService } from "../../services/localStorageService";
export default function LoginPage() {
  const {t} = useTranslation();
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log(values)
    dispatch(loginUser(values))
    
  };
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  useEffect(() => {
    if (isLoggedIn) {
      const role = localStorageService.get('USER').roles[0]
      if(role === "USER"){
        navigate("/"); 
      }else{
        navigate("/manager")
      }
    }
  }, [isLoggedIn, navigate]);
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
        <div className="leftLogin lg:w-1/2 md:w-full sm:w-full mb:w-full ">
          <div className="flex flex-col w-2/3 mx-auto items-center">
            <h1 className="text-2xl mb-5 font-mono"> {t('WelcomeBack')}</h1>
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
              name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}>
                <Input
                  className="input border px-[9px] py-[9px] rounded-[0.5rem] w-[320px] input-user"
                  placeholder="Input your user name"
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
                type="primay"
                size="large"
                htmlType="submit"
              >
                {t('Login')}
              </Button>
              <div className="w-full flex justify-between">
              <Link to="/Register" className="mt-2 w-full inline text-left text-sm font-mono hover:text-blue-500">
                {t('Register')}
              </Link>
              <a to="/" className="mt-2  w-full inline text-right text-sm font-mono hover:text-blue-500">
              {t('Foget Password')}
              </a>
            </div>
            </Form>
            
            <div className="relative">
              <p className="my-5 text-center opacity-40 relative login-with text-sm font-mono">
               Login With
              </p>
            </div>
          </div>
        </div>
        {/* md:hidden sm:hidden mb:hidden lg:block  */}
        <div className="rightLogin h-full w-1/2 md:hidden sm:hidden mb:hidden lg:block">
          <img
            className="w-full h-full object-cover rounded-tl-3xl rounded-bl-3xl "
            src="https://res.cloudinary.com/dtsfnikj0/image/upload/v1685087448/pexels-photo-1903965_fapoja.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
