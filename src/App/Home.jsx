import React from "react";
import logo from "../assets/Logo.png";
import bg from "../assets/bg.png";
import apps from "../assets/bgapps.png";
const Home = () => {
  return (
    <div className="font-raleway">
      <div className=" flex justify-between py-4 px-20 shadow-md">
        <img src={logo} alt="" className="object-contain w-[8rem]" />
        <div className=""></div>
      </div>
      <div className="relative ">
        {" "}
        <img src={bg} className="absolute" />
        <p className="absolute text-white left-20 inset-16 font-semibold text-2xl ">
          Verify your favourite apps with confidence.
        </p>
        <img
          src={apps}
          className="absolute z-[-1] right-0 w-[41.3rem] object-contain"
        />
      </div>
      <div className="w-full px-20"></div>
    </div>
  );
};

export default Home;
