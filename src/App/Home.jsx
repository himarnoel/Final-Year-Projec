import React from "react";
import logo from "../assets/Logo.png";
import bg from "../assets/bg.png";
import apps from "../assets/bgapps.png";
import img1 from "../assets/apps/image1.png";
import img2 from "../assets/apps/image2.png";
import img3 from "../assets/apps/image3.png";
import img4 from "../assets/apps/image4.png";
import img5 from "../assets/apps/image5.png";
import img6 from "../assets/apps/image6.png";
import img7 from "../assets/apps/image7.png";
import img8 from "../assets/apps/image8.png";
import img9 from "../assets/apps/image9.png";
const Home = () => {
  return (
    <div className="font-raleway">
      <div className=" flex justify-between py-4 px-20 shadow-md fixed top-0 z-[20] w-full  bg-white">
        <img src={logo} alt="" className="object-contain w-[8rem]" />
        <div className=""></div>
      </div>
      <div className="relative mt-[3.2rem] ">
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
      <div className="w-[70rem] mx-auto mt-64 left-0 right-0 absolute  px-20  grid grid-cols-4 gap-y-10 justify-items-center">
        <div className="border-2 rounded-lg border-solid w-fit cursor-pointer">
          <img src={img1} alt="" className="p-4 object-contain" />
        </div>
        <div className="border-2 rounded-lg border-solid w-fit cursor-pointer">
          <img src={img2} alt="" className="p-4 object-contain" />
        </div>
        <div className="border-2 rounded-lg border-solid w-fit cursor-pointer">
          <img src={img3} alt="" className="p-4 object-contain" />
        </div>
        <div className="border-2 rounded-lg border-solid w-fit cursor-pointer">
          <img src={img4} alt="" className="p-4 object-contain" />
        </div>
        <div className="border-2 rounded-lg border-solid w-fit cursor-pointer">
          <img src={img5} alt="" className="p-4 object-contain" />
        </div>
        <div className="border-2 rounded-lg border-solid w-fit cursor-pointer">
          <img src={img6} alt="" className="p-4 object-contain" />
        </div>
        <div className="border-2 rounded-lg border-solid w-fit cursor-pointer">
          <img src={img7} alt="" className="p-4 object-contain" />
        </div>
        <div className="border-2 rounded-lg border-solid w-fit cursor-pointer">
          <img src={img8} alt="" className="p-4 object-contain" />
        </div>{" "}
        <div className="border-2 rounded-lg border-solid w-fit cursor-pointer">
          <img src={img9} alt="" className="p-4 object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Home;
