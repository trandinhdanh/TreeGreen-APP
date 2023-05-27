import React from "react";
import { useSelector } from "react-redux";
import './Loading.scss'
export default function Loading() {
  let isLoading  = useSelector((state) => {return state.loading.isLoading;});
  return isLoading ? (
    <div class="fixed top-0 left-0 right-0 h-screen z-50 flex justify-center items-center bg-[#000000b0]">

  <div class="loader bg-white p-5 rounded-full flex space-x-3">
    <div class="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
    <div class="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
    <div class="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
  </div>

</div>
  ) : (
    ""
  );
}