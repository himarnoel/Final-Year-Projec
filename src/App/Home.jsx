import React from "react";
import logo from "../assets/Logo.png";
const Home = () => {
  return (
    <div>
      <div className=" flex justify-between py-4 px-20">
        <img src={logo} alt="" className="object-contain w-[9rem]" />
        <div className="w-[18rem] flex items-center justify-between">
          <button
            onClick={() => navigate("/signup")}
            className="bg-[#007DFE] py-2 px-10 text-white rounded-lg font-medium"
          >
            Signup
          </button>
          <button
            onClick={() => navigate("/login")}
            className="border border-[#007DFE] text-[#007DFE] py-2 px-10 font-medium rounded-lg"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
