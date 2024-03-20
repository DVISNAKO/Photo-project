import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

import { RiTiktokLine } from "react-icons/ri";

const Contacts = () => {
  return (
    <div className="es:flex-col md:flex-row flex justify-center items-center my-10 w-screen">
      <div className="flex justify-center items-center flex-col text-nowrap w-1/2 p-4">
        <h2 className="m-2 text-[25px]">MY CONTACTS:</h2>
        <h2 className="m-2"> lai13@inbox.lv</h2>
        <h2 className="m-2 border-2 p-3 rounded-xl hover:bg-slate-400"> <a target="_blank" href="https://t.me/lainevolcite">Написать в Телеграм</a></h2>
        <hr className="h-1 w-20 m-3" />
        <h2 className="m-2 text-[25px]">My Social medias:</h2>
        <div className="flex gap-1 ml-3 cursor-pointer">
          <div className="hover:bg-slate-400 rounded-xl p-3 text-[30px]">
          <a target="_blank" href="https://www.instagram.com/volcites_photos?igsh=cnJuam13anZtaGJ0&utm_source=qr"><FaInstagram /></a>
          </div>
          {/* <div className="hover:bg-slate-400 rounded-xl p-3 text-[30px]">
          <FaTelegramPlane />
          </div> */}
          <div className="hover:bg-slate-400 rounded-xl p-3 text-[30px]">
           <a target="_blank" href="https://tiktok.com/@volcites_photos?_t=8kGdMatiX4L&_r=1"><RiTiktokLine /></a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-1/2">
        <img
          className="max-h-[600px] max-w-[500px] object-cover hover:translate-y-2"
          src="https://images.unsplash.com/photo-1524504992887-a2bc4b258e1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDExfHx8ZW58MHx8fHx8&w=1000&q=80"
        />
      </div>
    </div>
  );
};

export default Contacts;
