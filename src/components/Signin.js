import React from "react";

const Signin = () => {
  return (
    <div className="bg-[#F0F8FF] rounded-3xl p-10 flex flex-col gap-6 md:w-[45%]">
      <div className="text-[#F78117] text-center font-semibold text-2xl">Sign in</div>
      <div className="bg-[#7A7A7A] h-[1px]"></div>
      <div className="md:px-10 flex flex-col gap-5">
        <div className="text-[#004F95] font-semibold text-2xl">Sign in to your account</div>
        <div className="flex flex-col">
          <div className="text-[#2A2A2A] font-bold mb-2">Email Id</div>
          <input className="py-2 px-4 text-xl rounded-md " type="email" placeholder="xxxxxxxxxx" />
        </div>
        <div className="flex flex-col">
          <div className="text-[#2A2A2A] font-bold mb-2">Password</div>
          <input className="py-2 px-4 text-xl rounded-md" type="password" placeholder="xxxxxxxxxx" />
        </div>
        <div className="text-[#E12C33] font-bold">Forgot Password</div>
        <button className="bg-[#004F95] text-[#FFFFFF] text-center py-2 rounded-md text-xl font-semibold">Sign in</button>
      </div>
      <div className="flex justify-center">
        <div className="text-[#7A7A7A]">New to vajra?</div>
        <div className="text-[#F78117] font-semibold ml-5">Sign Up Now</div>
      </div>
    </div>
  );
};

export default Signin;
