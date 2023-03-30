import React from "react";
import signupimg from "../assets/signup.svg";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="w-full h-screen bg-[#fff] font-raleway items-center gap-x-8 grid grid-cols-2">
        <div className="dd 3xl:bg-blue-100 flex h-full justify-center flex-col items-center ">
          <h1 className="text-[#2B2B2B] text-5xl font-semibold w-[22rem] text-center">
            Welcome Here
          </h1>
          <p className="text-[#2B2B2B80] text-sm mt-4">
            Please enter your contact details to connect.
          </p>
          <form action="" method="get">
            <div className="mt-4">
              <label
                htmlFor=""
                className="text-[#2B2B2B] text-sm block font-semibold ml-3"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                className="mt-1 focus:outline-none  rounded-lg border border-[#D7D7D7] text-xs py-3 w-[22rem] px-2 placeholder:text-xs leading-tight focus:shadow-outline"
                placeholder="John Doe"
              />
            </div>

            <div className="mt-8">
              <label
                htmlFor=""
                className="text-[#2B2B2B] text-sm block font-semibold ml-3"
              >
                Email address
              </label>
              <input
                id="name"
                type="text"
                className="mt-1 focus:outline-none rounded-lg border border-[#D7D7D7] text-xs py-3 w-[22rem] px-2 placeholder:text-xs leading-tight focus:shadow-outline shadow-sm"
                placeholder="name@compagny.com"
              />
            </div>
            <div className="mt-8">
              <label
                htmlFor=""
                className="text-[#2B2B2B] text-sm block font-semibold ml-3"
              >
                Password
              </label>
              <input
                id="name"
                type="text"
                className="mt-1 focus:outline-none rounded-lg border border-[#D7D7D7] text-xs py-3 w-[22rem] px-2 placeholder:text-xs leading-tight focus:shadow-outline shadow-sm"
                placeholder="name@compagny.com"
              />
            </div>
            <button className="bg-[#007DFE] w-[22rem] mt-10 rounded-lg py-2 text-white">
              Signup
            </button>
            <p className="w-[22rem] text-xs justify-center mt-4 flex">
              <p>Already have an account ?</p>
              <p
                onClick={() => navigate("/")}
                className="text-[#2B2B2B] font-semibold ml-2 "
              >
                Login here
              </p>
            </p>
          </form>
        </div>
        <div className="dd 3xl:bg-rose-200 flex items-center  justify-center h-full">
          <img src={signupimg} alt="" className="object-contain w-[38rem]" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
