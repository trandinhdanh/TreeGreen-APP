import React from "react";
import "./JoinOurHomePage.scss";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function JoinOurHomePage() {
  const { t }= useTranslation()
  const navigate = useNavigate();
  return (
    <div className="joinOur w-full h-auto mb-10 container mx-auto lg:px-24 md:px-24 sm:px-5 mb:px-5 ">
        <div className="lg:flex flex-wrap bg-[#e9e8e8] rounded-[20px]">
            <div className="lg:w-1/2 md:w-full">
              <div className="p-10">
                  <h1 className="text-[30px] capitalize font-roboto">{t('nature')}</h1>
                  <p className="font-popping text-[14px] my-5"> {t('natureDes')}</p>
                  <button onClick={() => { navigate("/shop") }} className="bg-primary text-white px-5 py-2 font-bold rounded-lg">Shop Now</button>
              </div>
            </div>
            <div className="lg:w-1/2 md:w-full">
                <img className="w-full h-full rounded-r-[20px]" src="https://res.cloudinary.com/dtsfnikj0/image/upload/v1685087450/Jan_23_Unkillable-min_bbp1u0.jpg" />
            </div>
        </div>
    </div>
  );
}
