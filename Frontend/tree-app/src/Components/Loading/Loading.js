import React from "react";
import { useSelector } from "react-redux";
import './Loading.scss'
export default function Loading() {
  let isLoading  = useSelector((state) => {return state.loading.isLoading;});
  return isLoading ? (
    <div class="fixed z-50 w-full h-screen bg-[#0004] flex items-center justify-center">
	<div class="loader">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>
</div>

  ) : (
    ""
  );
}