import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between items-center px-16 py-5 bg-[#F0F8FF]">
      <div className="flex items-center">
        <div className="text-4xl text-[#004F95] font-light">Vajra</div>
        <div className="font-semibold ml-14 mt-2">&copy;2020 VAJRA, All Rights Reserved</div>
      </div>
      <div className="font-semibold">Terms & conditions | FAQ's</div>
    </div>
  );
};

export default Footer;
