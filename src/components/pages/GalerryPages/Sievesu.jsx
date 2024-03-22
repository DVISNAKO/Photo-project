import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../utils/routes";
import IMG1 from "../images/sieviesu/s1.jpeg";
import IMG2 from "../images/sieviesu/s2.jpeg";
import IMG3 from "../images/sieviesu/s3.jpeg";
import IMG4 from "../images/sieviesu/s4.jpeg";
import IMG5 from "../images/sieviesu/s5.jpeg";
import IMG6 from "../images/sieviesu/s6.jpeg";

const Sievesu = () => {
  const sieviesuIMG1 = [{ img: IMG1 }, { img: IMG2 }, { img: IMG3 }];
  const sieviesuIMG2 = [{ img: IMG4 }, { img: IMG5 }, { img: IMG6 }];

  return (
    <div className="flex justify-center items-center w-full h-full flex-col mx-5">
      <div className="flex my-6 text-[30px]">
        <h2>SIEVEŠU FOTO</h2>
      </div>
      <div className="flex justify-center items-center gap-5 mb-5 mx-5 ">
        {sieviesuIMG1.map((item) => (
          <img
            className="w-1/3 max-h-[500px] max-w-[400px] object-cover hover:translate-y-2"
            src={item.img}
          />
        ))}
      </div>
      <div className="flex justify-center items-center gap-5 mb-5 mx-5">
        {sieviesuIMG2.map((item) => (
          <img
            className="w-1/3 max-h-[500px] max-w-[400px] object-cover hover:translate-y-2"
            src={item.img}
          />
        ))}
      </div>
      <div className="mb-5 hover:text-orange-200">
        <button>
          <Link to={ROUTES.GALLERY}>Back to gallery</Link>
        </button>
      </div>
    </div>
  );
};

export default Sievesu;
