import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../utils/routes";
import IMG1 from '../images/viriesi/m1.jpeg'
import IMG2 from '../images/viriesi/m2.jpeg'
import IMG3 from '../images/viriesi/m3.jpeg'
import IMG4 from '../images/viriesi/m4.jpeg'
import IMG5 from '../images/viriesi/m5.jpeg'
import IMG6 from '../images/viriesi/m6.jpeg'

const Man = () => {
  return (
    <div className="flex justify-center items-center w-full h-full flex-col mx-5">
      <div className="flex my-6 text-[30px]">
        <h2>GRUPAS FOTO</h2>
      </div>
      <div className="flex justify-center items-center gap-5 mb-5 mx-5 ">
        <img
           className="w-1/3 max-h-[500px] max-w-[400px] object-cover hover:translate-y-2"
          src={IMG1}
        />
        <img
          className="w-1/3 max-h-[500px] max-w-[400px] object-cover hover:translate-y-2"
          src={IMG2}
        />
        <img
         className="w-1/3 max-h-[500px] max-w-[400px] object-cover hover:translate-y-2"
          src={IMG3}
        />
      </div>
      <div className="flex justify-center items-center gap-5 mb-5 mx-5">
        <img
           className="w-1/3 max-h-[500px] max-w-[400px] object-cover hover:translate-y-2"
          src={IMG4}
        />
        <img
          className="w-1/3 max-h-[500px] max-w-[400px] object-cover hover:translate-y-2"
          src={IMG5}
        />
        <img
         className="w-1/3 max-h-[500px] max-w-[400px] object-cover hover:translate-y-2"
          src={IMG6}
        />
      </div>
      <div className="mb-5 hover:text-orange-200"><button><Link to={ROUTES.GALLERY}>Back to gallery</Link></button></div>
    </div>
  );
};

export default Man;