import React, { useState } from "react";
import loginimg from "../assets/login.png";
import google from "../assets/google.svg";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { baseurl, loginValidate } from "../Service/validate";
import RingLoader from "react-spinners/RingLoader";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [load, setload] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidate,
    onSubmit: (values) => {
      console.log(values);
      setload(true);
      axios
        .post(`${baseurl}/login`, values)
        .then((res) => {
          setload(false);
          console.log(res);
          navigate("/home");
        })
        .catch((e) => {
          setload(false);
          console.log(e);
          navigate("/home");
        });
    },
  });

  return (
    <div>
      <div className="w-full h-screen bg-[#fff] font-raleway items-center gap-x-8 grid grid-cols-2">
        {load ? (
          <div className="absolute bg-cover bg-[#262626]/[0.8]  z-[20] h-screen w-screen flex  justify-center items-center text-3xl">
            <RingLoader color="#007DFE" size={90} />
          </div>
        ) : (
          ""
        )}
        <div className="dd 3xl:bg-blue-100 flex h-full justify-center flex-col items-center ">
          <h1 className="text-[#2B2B2B] text-5xl font-semibold w-[22rem] text-center">
            Welcome Back
          </h1>
          <p className="text-[#2B2B2B80] text-sm mt-4">
            Please enter your contact details to connect.
          </p>
          <form onSubmit={formik.handleSubmit}>
            <div className="mt-8">
              <label
                htmlFor=""
                className="text-[#2B2B2B] text-sm block font-semibold ml-3"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                className={
                  formik.errors.email && formik.touched.email
                    ? "mt-1 focus:outline-none rounded-lg border  border-red-500 text-xs py-3 w-[22rem] px-2 placeholder:text-xs leading-tight focus:shadow-outline shadow-sm"
                    : "mt-1 focus:outline-none rounded-lg border focus:border-[#007DFE]  border-[#D7D7D7] text-xs py-3 w-[22rem] px-2 placeholder:text-xs leading-tight focus:shadow-outline shadow-sm"
                }
                placeholder="name@company.com"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && formik.touched.email ? (
                <p className="text-red-500 text-xs font-poppins mt-1">
                  {formik.errors.email}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="mt-4">
              <label
                htmlFor=""
                className="text-[#2B2B2B] text-sm block font-semibold ml-3"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                className={
                  formik.errors.password && formik.touched.password
                    ? "mt-1 focus:outline-none rounded-lg border  border-red-500 text-xs py-3 w-[22rem] px-2 placeholder:text-xs leading-tight focus:shadow-outline shadow-sm"
                    : "mt-1 focus:outline-none rounded-lg border focus:border-[#007DFE]  border-[#D7D7D7] text-xs py-3 w-[22rem] px-2 placeholder:text-xs leading-tight focus:shadow-outline shadow-sm"
                }
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
              />
              {formik.errors.password && formik.touched.password ? (
                <p className="text-red-500 text-xs font-poppins mt-1">
                  {formik.errors.password}
                </p>
              ) : (
                ""
              )}
            </div>
            <p className="w-[22rem] text-right mt-4 text-xs font-medium cursor-pointer text-[#007DFE]">
              forgot Password
            </p>
            <button
              // onClick={() => navigate("/home")}
              className="bg-[#007DFE] font-semibold w-[22rem] text-sm mt-4 shadow-sm rounded-lg py-3 text-white"
            >
              Login
            </button>
            <button className=" border-[#D7D7D7] border text-sm flex items-center justify-center w-[22rem] mt-4 shadow-sm rounded-lg py-2 text-[2B2B2B]">
              <img src={google} alt="" />{" "}
              <p className="ml-2">Log in with Google</p>
            </button>
            <p className="w-[22rem] text-xs justify-center mt-4 flex">
              <p>Don’t have an account ?</p>
              <p
                onClick={() => navigate("/signup")}
                className="text-[#2B2B2B] font-semibold ml-2 cursor-pointer "
              >
                Sign up here
              </p>
            </p>
          </form>
        </div>
        <div className="dd 3xl:bg-rose-200 flex items-center  justify-center h-full">
          <img src={loginimg} alt="" className="object-contain w-[32rem]" />
        </div>
      </div>
    </div>
  );
};

export default Login;
