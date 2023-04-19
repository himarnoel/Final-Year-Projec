import React, { useState } from "react";
import signupimg from "../assets/signup.svg";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { loginValidate, signupValidate } from "../Service/validate";
import RingLoader from "react-spinners/RingLoader";
const Signup = () => {
  const navigate = useNavigate();
  const [load, setload] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: signupValidate,
    onSubmit: (values) => {},
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
            Welcome Here
          </h1>
          <p className="text-[#2B2B2B80] text-sm mt-4">
            Please enter your contact details to connect.
          </p>
          <img src="" alt="" />
          <form onSubmit={formik.handleSubmit}>
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
                className={
                  formik.errors.name && formik.touched.name
                    ? "mt-1 focus:outline-none rounded-lg border  border-red-500 text-xs py-3 w-[22rem] px-2 placeholder:text-xs leading-tight focus:shadow-outline shadow-sm"
                    : "mt-1 focus:outline-none rounded-lg border focus:border-[#007DFE]  border-[#D7D7D7] text-xs py-3 w-[22rem] px-2 placeholder:text-xs leading-tight focus:shadow-outline shadow-sm"
                }
                placeholder="John Doe"
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
              />
              {formik.errors.name && formik.touched.name ? (
                <p className="text-red-500 text-xs font-poppins mt-1">
                  {formik.errors.name}
                </p>
              ) : (
                ""
              )}
            </div>

            <div className="mt-8">
              <label
                htmlFor=""
                className="text-[#2B2B2B] text-sm block font-semibold ml-3"
              >
                Email address
              </label>
              <input
                id="email"
                type="text"
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
            <div className="mt-8">
              <label
                htmlFor=""
                className="text-[#2B2B2B] text-sm block font-semibold ml-3"
              >
                Password
              </label>
              <input
                id="password"
                type="text"
                className={
                  formik.errors.password && formik.touched.password
                    ? "mt-1 focus:outline-none rounded-lg border  border-red-500 text-xs py-3 w-[22rem] px-2 placeholder:text-xs leading-tight focus:shadow-outline shadow-sm"
                    : "mt-1 focus:outline-none rounded-lg border focus:border-[#007DFE]  border-[#D7D7D7] text-xs py-3 w-[22rem] px-2 placeholder:text-xs leading-tight focus:shadow-outline shadow-sm"
                }
                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />
              {formik.errors.password && formik.touched.password ? (
                <p className="text-red-500 text-xs font-poppins mt-1">
                  {formik.errors.password}
                </p>
              ) : (
                ""
              )}
            </div>
            <button className="bg-[#007DFE] w-[22rem] mt-10 rounded-lg py-2 text-white">
              Signup
            </button>
            <p className="w-[22rem] text-xs justify-center mt-4 flex">
              <p>Already have an account ?</p>
              <p
                onClick={() => navigate("/login")}
                className="text-[#2B2B2B] font-semibold ml-2 cursor-pointer"
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
