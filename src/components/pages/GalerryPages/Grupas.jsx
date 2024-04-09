import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageState } from "../../../utils/context";
import { ROUTES } from "../../../utils/routes";
import ButtonBack from "../../ButtonBack/ButtonBack";
import IMG1 from "../images/grupas/g1.jpeg";
import IMG2 from "../images/grupas/g2.jpeg";
import IMG3 from "../images/grupas/g3.jpeg";
import IMG4 from "../images/grupas/g4.jpeg";
import IMG5 from "../images/grupas/g5.jpeg";
import IMG6 from "../images/grupas/g6.jpeg";

const Grupas = () => {
    const [language, setLanguage] = useContext(LanguageState);
  const grupasImg1 = [{ img: IMG1 }, { img: IMG2 }, { img: IMG3 }];
  const grupasImg2 = [{ img: IMG4 }, { img: IMG5 }, { img: IMG6 }];

  return (
    <div className="flex justify-center items-center w-full h-full flex-col mx-5">
      <div className="flex my-6 text-[30px]">
        <h2> {language ? <>ĢIMENES FOTOSESIJA</> : <>СЕМЕЙНЫЕ ФОТО</> } </h2>
      </div>
      <div className="flex justify-center items-center gap-5 mb-5 mx-5 ">
        {grupasImg1.map((item) => (
          <img
            className="w-1/3 max-h-[500px] max-w-[400px] object-cover hover:translate-y-2"
            src={item.img}
          />
        ))}
      </div>
      <div className="flex justify-center items-center gap-5 mb-5 mx-5">
        {grupasImg2.map((item) => (
          <img
            className="w-1/3 max-h-[500px] max-w-[400px] object-cover hover:translate-y-2"
            src={item.img}
          />
        ))}
      </div>
      <div className="mb-5 hover:text-var(--color-pink)">
      <ButtonBack/>
      </div>
    </div>
  );
};

export default Grupas;
