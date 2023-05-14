import React, { useEffect, useState } from "react";
// import UserNav from "./UserNav";
import { NavLink } from "react-router-dom";
import "./HeaderTheme.scss";
import UserNav from "./UserNav";
import { useTranslation } from "react-i18next";
export default function HeaderTheme() {
  const { t }= useTranslation();
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [navbar, setNavbar] = useState(false);
  let handleIsOpenMenu = () => {
    setIsOpenMenu((current) => !current);
    setNavbar(true);
  };
  
  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / scrollHeight) * 100;
      setScrollPercentage(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={`w-full bg-white ${navbar ? "py-1" : "py-3"} fixed z-10 top-0 left-0 right-0 transition-all`}>
      <nav
        id="nav"
        className={`flex bg-white  w-full items-center py-3 justify-between  flex-wrap container mx-auto mb:px-5 sm:px-5 md:px-24 top-0 `}
      >
        <div className="block lg:hidden sm:block mb:block">
          <button
            onClick={() => {
              handleIsOpenMenu();
            }}
            className="btn__nav flex items-center rounded text-gray-500  hover:text-black hover:border-white"
          >
            <svg
              className="fill-current h-5 w-5"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="flex items-center flex-shrink-0 lg:mr-6">
          <NavLink to="/">
          {/* <img className='w-[170px]' src='http://mauweb.monamedia.net/fiorello/wp-content/uploads/2018/06/logo-fiorello.png' /> */}
              <p className="font-playfair text-[18px] tracking-wider m-0 text-[#263A29]"> 
                <span className="text-primary font-bold">GREEN </span> 
              EARTH
              </p>
          </NavLink>
        </div>
        <div
          className={`nav__menu w-full block text-[#263A29] lg:overflow-visible md:overflow-hidden sm:overflow-hidden mb:overflow-hidden flex-grow lg:flex lg:items-center lg:w-auto  mb:order-1 sm:order-1 md:order-1 lg:order-none ${
            isOpenMenu ? "mb:h-[320px] sm:h-[320px]" : "mb:h-0 sm:h-0"
          } transition-all ease-in  lg:h-full duration-300 lg:opacity-100 text-center`}
        >
          <div className="navCenter font-montserrat capitalize justify-center font-bold nav__links text-[12px] lg:flex-grow mb:mr-0 sm:mr-0 lg:mr-5 lg:flex">
            <NavLink to={"/"}>
            <button className="navItem block mt-4 lg:inline-block lg:mt-0 mb:py-3 mb:ml-0 sm:ml-0 text-left sm:py-3 lg:py-0 mb:mr-0 sm:mr-0 lg:mr-4"
              href="#"
            >
             {t('home')}
            </button>
            </NavLink>
            <NavLink to={"/shop"}>
            <button className="navItem block mt-4 lg:inline-block lg:mt-0 mb:py-3 mb:ml-0 sm:ml-0 text-left sm:py-3 lg:py-0 mb:mr-0 sm:mr-0 lg:mr-4"
              href="#"
            >
              {t('cart')}
            </button>
            </NavLink>
          <NavLink to={"/blog"}>
            <button className="navItem block mt-4 lg:inline-block lg:mt-0 mb:py-3 mb:ml-0 sm:ml-0 text-left sm:py-3 lg:py-0 mb:mr-0 sm:mr-0 lg:mr-4"
                href="#"
            >
                {t('blog')}
            </button>
          </NavLink>
            <NavLink to={"/introduce"}>
            <button className="navItem block mt-4 lg:inline-block lg:mt-0 mb:py-3 mb:ml-0 sm:ml-0 text-left sm:py-3 lg:py-0 mb:mr-0 sm:mr-0 lg:mr-4"
              href="#"
            >
             {t('intro')}
            </button>
            </NavLink>
          </div>
          <div className="lg:min-w-[16rem]">
            <UserNav />
          </div>
        </div>
      </nav>
      {/* <div className="absolute top-full left-0 w-full h-[3px] bg-[#fff] ">
          <div className="h-full bg-primary transition-all" style={{ width: `${scrollPercentage}%`, transition: 'width 0.1s' }}></div>
      </div> */}
    </header>
    
  );
}
