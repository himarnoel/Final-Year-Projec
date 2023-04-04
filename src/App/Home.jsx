import React from "react";
import logo from "../assets/Logo2.png";
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
import avatar from "../assets/avatar.jpg";
const Home = () => {
  return (
    <div className="font-raleway">
      <div className=" flex justify-between py-2 px-20 shadow-md fixed top-0 z-[20] w-full  bg-black/[0.8]">
        <img src={logo} alt="" className="object-contain w-[8rem]" />
        <div className="flex items-center">
          <p className="text-white">James Olaniyi</p>
          <img src={avatar} alt="" className="w-[3rem] rounded-full ml-3" />
        </div>
      </div>
      <div className="relative mt-[4rem] ">
        {" "}
        <img src={bg} className="absolute" />
        <p className="absolute text-white left-20 inset-16 font-semibold text-2xl ">
          Verify your favourite apps with confidence.
        </p>
        <img
          src={apps}
          className="absolute z-[-1] right-0 w-[41rem] object-contain"
        />
      </div>
      <div className="w-[70rem] mx-auto mt-64 pb-20  left-0 right-0 absolute  px-20    grid grid-cols-4 gap-y-10 justify-items-center">
        <div className="border-2 rounded-lg border-solid  cursor-pointer w-[11rem] py-6 px-2">
          <img src={img1} alt="" className="object-contain mx-auto" />
          <p className="text-sm font-semibold mt-2">Netflix</p>
        </div>
        <div className="border-2 rounded-lg border-solid  cursor-pointer w-[11rem] py-6 px-2">
          <img src={img2} alt="" className="object-contain mx-auto" />
          <p className="text-sm font-semibold mt-2">Adobe Acrobat Reader DC</p>
        </div>
        <div className="border-2 rounded-lg border-solid  cursor-pointer w-[11rem] py-6 px-2">
          <img src={img3} alt="" className="object-contain mx-auto" />
          <p className="text-sm font-semibold mt-2">Brave Browser</p>
        </div>
        <div className="border-2 rounded-lg border-solid  cursor-pointer w-[11rem] py-6 px-2">
          <img src={img4} alt="" className="object-contain mx-auto" />
          <p className="text-sm font-semibold mt-2">Visual Studio Code</p>
        </div>
        <div className="border-2 rounded-lg border-solid  cursor-pointer w-[11rem] py-6 px-2">
          <img src={img5} alt="" className="object-contain mx-auto" />
          <p className="text-sm font-semibold mt-2">Instagram</p>
        </div>
        <div className="border-2 rounded-lg border-solid  cursor-pointer w-[11rem] py-6 px-2">
          <img src={img6} alt="" className="object-contain mx-auto" />
          <p className="text-sm font-semibold mt-2">Slack</p>
        </div>
        <div className="border-2 rounded-lg border-solid  cursor-pointer w-[11rem] py-6 px-2">
          <img src={img7} alt="" className="object-contain mx-auto" />
          <p className="text-sm font-semibold mt-2">Discord</p>
        </div>
        <div className="border-2 rounded-lg border-solid  cursor-pointer w-[11rem] py-6 px-2 ">
          <img src={img8} alt="" className="object-contain mx-auto" />
          <p className="text-sm font-semibold mt-2">Epic Games</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
