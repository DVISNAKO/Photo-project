import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { RiTiktokLine } from "react-icons/ri";

const Partners = () => {
  return (
    <div className="es:flex-col md:flex-row flex justify-center items-center my-10 w-screen">
      <div className="flex justify-center items-center flex-col text-nowrap w-1/2 p-4">
        <h2 className="m-2 text-[25px]">About:</h2>
        <p className="m-2 text-wrap indent-5 max-w-[450px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
          facere in magnam libero quo sequi tempora vitae! Commodi dolore eum
          quaerat! Quidem quo et eaque enim dolore illo molestiae esse.
        </p>
        <h2 className="m-2 text-[25px]">Contacts:</h2>
        <h2 className="m-2"> fsdf@inbox.lv</h2>
        <h2 className="m-2"> Rezekne</h2>
        <h2 className="m-2"> +3712222222</h2>
        <hr className="h-1 w-20 m-3" />
        <h2 className="m-2 text-[25px]">Social medias:</h2>
        <div className="flex gap-1 ml-3 cursor-pointer">
          <div className="hover:bg-slate-400 rounded-xl p-3 text-[30px]">
            <FaInstagram />
          </div>
          <div className="hover:bg-slate-400 rounded-xl p-3 text-[30px]">
            <CiFacebook />
          </div>
          <div className="hover:bg-slate-400 rounded-xl p-3 text-[30px]">
            <RiTiktokLine />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-1/2">
        <img
          className="max-h-[600px] max-w-[500px] object-cover hover:translate-y-2"
          src="https://images.unsplash.com/photo-1664942457269-f8638d5ac4c8?w=420&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8ODM3ODg0OHx8ZW58MHx8fHx8"
        />
      </div>
    </div>
  );
};

export default Partners;