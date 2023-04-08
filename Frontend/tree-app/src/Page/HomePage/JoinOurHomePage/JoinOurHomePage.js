import React from "react";
import "./JoinOurHomePage.scss";

export default function JoinOurHomePage() {
  return (
    <div className="joinOur w-full h-[300px] my-10 relative">
      <div className="absolute top-1/2 left-1/2 traabsolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="font-montserrat text-white font-bold text-3xl mb-5">
          Join The Colorful Bunch!
        </h1>
        <div>
          <div className="flex justify-center">
            <div className="mb-3 xl:w-96">
              <div className="relative mb-4 flex w-full flex-wrap items-stretch animate__backInRight animate__animated">
                <input
                  type="search"
                  className="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
                  placeholder="Email..."
                  aria-label="Search"
                  aria-describedby="button-addon1"
                />
                <button
                  className="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                  type="button"
                  id="button-addon1"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
