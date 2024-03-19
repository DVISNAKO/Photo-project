import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { RiTiktokLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="w-full flex justify-center items-center text-[25px] mt-auto h-20 bg-zinc-200">
      <h2>Social media: </h2>
      <div className="flex gap-1 ml-3 cursor-pointer">
        <div className="hover:bg-slate-400 rounded-xl p-3">
          <FaInstagram />
        </div>
        <div className="hover:bg-slate-400 rounded-xl p-3">
          <CiFacebook />
        </div>
        <div className="hover:bg-slate-400 rounded-xl p-3">
          <RiTiktokLine />
        </div>
      </div>
    </div>
  );
};

export default Footer;
