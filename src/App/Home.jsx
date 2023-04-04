import React from "react";
import logo from "../assets/Logo.png";
import bg from "../assets/bg.png";
import apps from "../assets/apps.png";
const Home = () => {
  return (
    <div>
      <div className=" flex justify-between py-4 px-20 shadow-md">
        <img src={logo} alt="" className="object-contain w-[9rem]" />
        <div className="w-[18rem] flex items-center justify-between"></div>
      </div>
      <div className="relative ">
        {" "}
        <img src={bg} className="absolute" />
        <img src={apps} className="absolute right-0 w-[20rem] object-contain" />
      </div>
    </div>
  );
};

export default Home;
