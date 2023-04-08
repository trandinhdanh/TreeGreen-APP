import { message } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineLogout, MdOutlineLogin } from "react-icons/md";
import { BsFillPersonPlusFill, BsFillPersonFill } from "react-icons/bs";
import { localStorageService } from "../../Services/localStorageService";
import { loginAction } from "../../Redux/Actions/userAction";
import { Link, NavLink, useNavigate } from "react-router-dom";
import UserInfoModel from "../UserInfoModel/UserInfoModel";
export default function UserNav() {
  let dispatch = useDispatch();
  let history = useNavigate();
  const [openUserInfo, setOpenUserInfo] = useState(false);

  let userInfo = useSelector((state) => {
    return state.userReducer.userInfo;
  });

  const renderContent = () => {
    if (userInfo) {
      return (
        <div className="flex mb:flex-col sm:flex-col lg:flex-row mb:items-start sm:items-start lg:space-x-5 lg:items-center ">
          <UserInfoModel
            open={openUserInfo}
            close={() => {
              setOpenUserInfo(false);
            }}
          />
          <button
            to="manager"
            className="mb:py-[12px] mb:mt-[16px] sm:py-[12px] sm:mt-[16px] lg:mt-0 mb:w-full sm:w-full  font-bold flex items-center hover:text-red-500 transition duration-300 "
            onClick={() => {
              if (userInfo.maLoaiNguoiDung === "QuanTri") {
                history("/manager");
              } else {
                setOpenUserInfo(true);
              }
            }}
          >
            <BsFillPersonFill className="mr-2" />
            {userInfo.hoTen}
          </button>
          <button
            onClick={() => {
              localStorageService.user.remove();
              dispatch(loginAction(null));
              message.success("Đăng xuất thành công!");
              setTimeout(() => {
                history("/login");
              }, 1000);
            }}
            className="mb:py-[12px] mb:mt-[16px] sm:py-[12px] sm:mt-[16px] lg:mt-0 w-full sm: lg:px-2 lg:py-2 rounded font-bold flex items-center transition ease-in-out delay-15 hover:bg-red-500 duration-300 "
          >
            <MdOutlineLogout className="mr-2 text-xl" />{" "}
            <span className="w-[5rem]">Đăng Xuất</span>
          </button>
        </div>
      );
    } else {
      return (
        <div className="flex mb:flex-col sm:flex-col lg:flex-row mb:items-start sm:items-start lg:space-x-5 lg:items-center ">
          <button
            onClick={() => {
              window.location.href = "/login";
            }}
            className="mb:py-[12px] mb:mt-[16px] sm:py-[12px] sm:mt-[16px] lg:mt-0 w-full sm: lg:px-2 lg:py-2 rounded font-bold flex items-center transition ease-in-out delay-15 hover:bg-red-500 duration-300 "
          >
            <MdOutlineLogin className="mr-2 text-xl" />
            Đăng Nhập
          </button>
          <NavLink to="/register" className="w-full">
            <button className="mb:py-[12px] mb:justify-start sm:justify-start lg:justify-center mb:mt-[16px] sm:py-[12px] sm:mt-[16px] lg:mt-0 w-full sm: lg:px-2 lg:py-2 rounded font-bold flex items-center transition ease-in-out delay-15 hover:bg-red-500 duration-300  ">
              <BsFillPersonPlusFill className="mr-2" />
              Đăng Kí
            </button>
          </NavLink>
        </div>
      );
    }
  };
  return <div>{renderContent()}</div>;
}
