import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { RiTiktokLine } from "react-icons/ri";
import IMG1 from "../pages/images/sasniegumi/sa1.jpeg";
import IMG2 from "../pages/images/sasniegumi/sa2.jpeg";
import IMG3 from "../pages/images/sasniegumi/sa3.jpeg";
import IMG4 from "../pages/images/sasniegumi/sa4.jpeg";
import IMG5 from "../pages/images/sasniegumi/sa5.jpeg";


const Sasniegumi = ({blockPhoto}) => {
  return (
    <div className="es:mx-5 flex flex-col gap-5 mt-10">
      <div className="flex justify-center flex-row gap-5 mx-5">
        <img
          className="w-1/2 max-h-max-h-[600px] max-w-[500px] object-cover hover:translate-y-2"
          src={IMG1}
          onContextMenu={blockPhoto}
        />
        <img
          className="w-1/2 max-h-max-h-[600px] max-w-[500px] object-cover hover:translate-y-2"
          src={IMG2}
          onContextMenu={blockPhoto}
        />
      </div>

      <div className="flex justify-center">
        <img
          className="w-full max-h-auto max-w-[1000px] object-cover hover:translate-y-2"
          src={IMG3}
          onContextMenu={blockPhoto}
        />
      </div>
      <div className="flex justify-center mb-10">
        <img
          className="w-full max-h-auto max-w-[1000px] object-cover hover:translate-y-2"
          src={IMG4}
          onContextMenu={blockPhoto}
        />
      </div>
      <div className="flex justify-center mb-10">
        <img
          className="w-full max-h-auto max-w-[1000px] object-cover hover:translate-y-2"
          src={IMG5}
          onContextMenu={blockPhoto}
        />
      </div>
    </div>
  );
};

export default Sasniegumi;
