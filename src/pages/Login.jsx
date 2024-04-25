import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";


const Login = () => {
  const[ email, setEmail] = useState("")
  const[ pass, setPass] = useState("")

  const {login} = useContext(AuthContext)

 const handleSubmit = (e) => {
   e.preventDefault();
   if (email.toLocaleLowerCase() === "xyz@aa.com" && pass === "xyz") {
     console.log({ email, pass });
     login({ email, pass });
   } else {
     alert("Hatalı giriş yaptınız!");
   }
 };
 
  return (
    <div className="loginDiv">
      <span className="w-[10px] h-[500px] long "></span>
      <div className="h-[500px] w-11/12 sm:w-[475px] bg-white rounded-r-[20px] p-5 flex flex-col justify-center text-center ">
        <div className="flex justify-center items-center mt-2 gap-2 pt-4">
          <h1 className="text-[22px] sm:text-[32px] font-montserrat font-[700] uppercase pt-1">
           The Store App
          </h1>
        </div>
        <div className="my-1">
          <p className="font-montserrat text-labelColor text-label mt-1">
            Sign in to your account
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col text-left p-3 gap-5 "
        >
          <div className="flex flex-col gap-2">
            <label
              className="font-montserrat text-label text-labelColor hover:cursor-pointer hover:after:content-['xyz@aa.com'] hover:after:text-black hover:after:pl-3 hover:after:underline"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="login-input"
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="font-montserrat text-label text-labelColor hover:cursor-pointer hover:after:content-['xyz'] hover:after:text-black hover:after:pl-3 hover:after:underline"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="login-input"
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <button className="bg-main h-[44px] font-montserrat text-label text-white uppercase hover:opacity-90 rounded-[4px] ">
            Sign In
          </button>
          <p className="flex justify-center items-center flex-wrap pb-2">
            <span className="text-label font-montserrat font-[400] text-labelColor">
              Not a member?
            </span>
            <span className="text-main text-[14px] font-montserrat font-[500] ml-1 cursor-pointer ">
              Start a 14 day free trial
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
