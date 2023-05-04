import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center px-16 py-5 bg-[#F0F8FF] md:flex-row md:justify-between">
      <div className="flex flex-col items-center md:flex-row">
        <div className="text-4xl text-[#004F95] font-light">Vajra</div>
        <div className="font-semibold mt-2 md:ml-14">&copy;2020 VAJRA, All Rights Reserved</div>
      </div>
      <div className="font-semibold">Terms & conditions | FAQ's</div>
    </div>
  );
};

export default Footer;
