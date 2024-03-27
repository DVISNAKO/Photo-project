import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../utils/routes";
import IMG1 from "../images/dzivnieki/dz8.jpeg";
import IMG2 from "../images/dzivnieki/dz9.jpeg";
import IMG3 from "../images/dzivnieki/d3.jpeg";
import IMG4 from "../images/dzivnieki/d4.jpeg";
import IMG5 from "../images/dzivnieki/d7.jpeg";
import IMG6 from "../images/dzivnieki/d6.jpeg";
import ButtonBack from "../../ButtonBack/ButtonBack";

const Dzivnieki = () => {
  const dzivniekiImG1 = [{ img: IMG2 }, { img: IMG6 }, { img: IMG5 }];
  const dzivniekiImG2 = [{ img: IMG1 }, { img: IMG4 }, { img: IMG3 }];

  return (
    <div className="flex justify-center items-center w-full h-full flex-col mx-5">
      <div className="flex my-6 text-[30px]">
        <h2>DZĪVNIEKU FOTO</h2>
      </div>
      <div className="flex justify-center items-center gap-5 mb-5 mx-5 ">
        {dzivniekiImG2.map((item) => (
          <img
            className="w-1/3 max-h-[500px] max-w-[335px] object-cover hover:translate-y-2"
            src={item.img}
          />
        ))}
      </div>
      <div className="flex justify-center items-center gap-5 mb-5 mx-5">
        {dzivniekiImG1.map((item) => (
          <img
            className="w-1/3 max-h-[500px] max-w-[400px] object-cover hover:translate-y-2"
            src={item.img}
          />
        ))}
      </div>
      <div className="mb-5 hover:text-pink-400">
      <ButtonBack/>
      </div>
    </div>
  );
};

export default Dzivnieki;
