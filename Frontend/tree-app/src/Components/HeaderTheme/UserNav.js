import React, { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { Link, useNavigate  } from "react-router-dom";
import "./UserNav.scss";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import Cart from "../Cart/Cart";
import { localStorageService } from "../../services/localStorageService";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../Redux/auth/authSlice";
import { Badge } from "antd";
import { resetCart } from "../../Redux/cart/cartSlice";
export default function UserNav() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const [openLanguage, setOpenLanguage] = useState(false);
  const [user,setUser] = useState(localStorageService.get("USER"))
  const [openCart, setOpenCart] = useState(false);
  const cart = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const { t, i18n } = useTranslation();
  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setOpenLanguage(false);
  };
  const handleCartClick = () => {
    setOpenCart(false);
  };
  const handleLogOut = () => { 
    dispatch(resetCart())
    dispatch(logoutUser())
    navigate("/login")
    
  }
  useEffect(() => {
    if (isLoggedIn == false) {
     navigate('/login')
    }
  }, [isLoggedIn, navigate]);
  const handleRole = () => { 
    if(isLoggedIn){
     return ( 
     <>
      <Link
         to={user?.roles[0] === "SELLER" || user?.roles[0] === "ADMIN" ? "/manager" : `/profile/${user?.userDTO?.id}`}
        className="w-full text-black block h-full transition duration-100"
      >
        <li  className="dropdownItem  hover:bg-gray-200 transition duration-300">
          <p>{t('Welcome')}{user?.userDTO?.fullName}</p>
        </li>
      </Link>
      {user?.roles[0] === "USER" && (
          <>
          <Link
          to="/order"
          className="w-full block h-full transition duration-100"
        >
          <li className="dropdownItem hover:bg-gray-200 transition duration-300">
            <p> {t("Order")}</p>
          </li>
        </Link>
          <Link
            to="/registerSeller"
            className="w-full block h-full transition duration-100"
          >
            <li className="dropdownItem hover:bg-gray-200 transition duration-300">
              <p> {t("Become a seller")}</p>
            </li>
          </Link>
          </>
        )}  
      <Link
        to=""
        className="w-full text-black block h-full transition duration-100"
      >
        <li onClick={handleLogOut} className="dropdownItem  hover:bg-gray-200 transition duration-300">
          <p>{t("Logout")}</p>
        </li>
      </Link>  
     
      </>
      )
    }else{
      return(
        <>
      <Link
        to="/Register"
        className="w-full text-black block h-full transition duration-100"
      >
        <li className="dropdownItem  hover:bg-gray-200 transition duration-300">
          <p>{t("Register")}</p>
        </li>
      </Link>
       <Link
       to="/Login"
       className="w-full block h-full transition duration-100"
     >
       <li className="dropdownItem  hover:bg-gray-200 transition duration-300">
         <p> {t("Login")}</p>
       </li>
     </Link>
     <Link
            to="/registerSeller"
            className="w-full block h-full transition duration-100"
          >
            <li className="dropdownItem hover:bg-gray-200 transition duration-300">
              <p> {t("Become a seller")}</p>
            </li>
          </Link>
     </>
      )
    }
   }
  return (
    <div className=" flex items-center justify-end relative">
      <div
        onClick={() => {
          setOpenLanguage(!openLanguage);
          setOpen(false);
        }}
        className={`p-1 rounded-[50%] hover:bg-gray-200 transition-all`}
      >
        <TbWorld className="text-[20px] " />
      </div>
      {/* DROPDOWN LANGUAGE */}
      <div className="dropdownLanguge relative ">
        <ul
          className={`${
            openLanguage ? "" : "hidden"
          } animate__animated animate__jackInTheBox bg-white dropdownLanguage rounded-md border border-gray-300 transition duration-500`}
        >
          <li
            onClick={() => handleChangeLanguage("vi")}
            className=" cursor-pointer  hover:bg-gray-200 transition duration-300"
          >
            <p className="hover:text-black py-2 m-0 transition duration-100">
              Tiếng Việt
            </p>
          </li>
          <li
            onClick={() => handleChangeLanguage("en")}
            className=" cursor-pointer  hover:bg-gray-200 transition duration-300"
          >
            <p className="hover:text-black py-2 m-0 transition duration-100">
              English
            </p>
          </li>
        </ul>
      </div>
      {/* CART SHOP */}
      <div
        className="cartIconHeader p-1 rounded-[50%] hover:bg-gray-200 transition-all mx-4"
        onClick={() => {
          setOpenCart(!openCart);
          setOpen(false);
          setOpenLanguage(false);
        }}
      >
      <Badge count={0 }>
        <BsCart2 className=" text-[20px]" />
    </Badge>

      </div>
         <Cart openCart={openCart} handleCartClick={handleCartClick} />
   

      {/* DROPDOWN INFOR */}
      <div
        className="userIconHeader p-1 rounded-[50%] hover:bg-gray-200 transition-all"
        onClick={() => {
          setOpen(!open);
          setOpenLanguage(false);
        }}
      >
        {" "}
        <FiUser className=" text-[20px]" />
      </div>
      <div className="dropdownMenu relative">
        <ul
          className={`animate__animated animate__zoomIn text-left   bg-white dropdown rounded-xl border border-gray-300 transition duration-500 ${
            open ? "" : "hidden"
          } `}
        >
          {handleRole()}
          

          <li className="dropdownItem  hover:bg-gray-200 transition duration-300">
            <p className="transition duration-100">{t("Help")}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
