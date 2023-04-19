import React from "react";
import "./JoinOurHomePage.scss";

export default function JoinOurHomePage() {
  return (
    <div className="joinOur w-full h-auto mb-10 container mx-auto lg:px-24 md:px-24 sm:px-5 mb:px-5">
        <div className="lg:flex flex-wrap bg-[#e9e8e8]">
            <div className="lg:w-1/2 md:w-full">
              <div className="p-10">
                  <h1 className="text-[30px] capitalize font-roboto">(Almost) unkillable houseplants</h1>
                  <p className="font-popping text-[14px] my-5">We know what it’s like to be guilty of plant murder, we've pulled together a collection of plants who are low maintenance enough to forgive you for the odd missed watering.</p>
                  <button className="bg-primary text-white px-5 py-2 font-bold">Shop Now</button>
              </div>
            </div>
            <div className="lg:w-1/2 md:w-full">
                <img className="w-full h-full" src="https://res.cloudinary.com/patch-gardens/image/upload/c_fill,h_1600,q_auto:good,w_1600/v1/cms/Jan_23_Unkillable-min.jpg" />
            </div>
        </div>
    </div>
  );
}
