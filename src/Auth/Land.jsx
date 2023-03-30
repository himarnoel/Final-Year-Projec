import React from "react";
import logo from "../assets/Logo.png";
import app from "../assets/app.svg";
const Land = () => {
  return (
    <div className="font-raleway flex h-screen flex-col ">
      <div className=" flex justify-between py-4 px-20">
        <img src={logo} alt="" className="object-contain w-[9rem]" />
        <div className="w-[18rem] flex items-center justify-between">
          <button className="bg-[#007DFE] py-2 px-10 text-white rounded-lg font-medium">
            Signup
          </button>
          <button className="border border-[#007DFE] text-[#007DFE] py-2 px-10 font-medium rounded-lg">
            Login
          </button>
        </div>
      </div>
      <div className="w-full flex-auto grid items-center grid-cols-2 px-20">
        <div className="ss">
          <p className="text-[#506269] text-5xl w-[23rem] leading-[1.2] font-semibold">
            We Check Out Apps before You use Them{" "}
          </p>
          <p className="text-[#848484] text-xl font-thin mt-4">Android and iOS Apps</p>
          <button className="py-4 px-24 text-white bg-[#007DFE] mt-4">
            Check Apps
          </button>
        </div>
        <div className="ss">
          <img src={app} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Land;
