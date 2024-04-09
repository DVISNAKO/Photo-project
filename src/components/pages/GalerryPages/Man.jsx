import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../utils/routes";
import IMG1 from "../images/viriesi/m8.jpeg";
import IMG2 from "../images/viriesi/m2.jpeg";
import IMG3 from "../images/viriesi/m3.jpeg";
import IMG4 from "../images/viriesi/m7.jpeg";
import IMG5 from "../images/viriesi/m5.jpeg";
import IMG6 from "../images/viriesi/m6.jpeg";
import ButtonBack from "../../ButtonBack/ButtonBack";
import { LanguageState } from "../../../utils/context";

const Man = () => {
    const [language, setLanguage] = useContext(LanguageState);
  const virisuIMG1 = [{ img: IMG2 }, { img: IMG5 }, { img: IMG6 }];
  const virisuIMG2 = [{ img: IMG3 }, { img: IMG4 }, { img: IMG1 }];

  return (
    <div className="flex justify-center items-center w-full h-full flex-col mx-5">
      <div className="flex my-6 text-[30px]">
        <h2> {language ? <>VĪRIEŠU FOTO </> : <>ФОТО МУЖЧИН</> } </h2>
      </div>
      <div className="flex justify-center items-center gap-5 mb-5 mx-5 ">
        {virisuIMG1.map((item) => (
          <img
            className="w-1/3 max-h-[500px] max-w-[400px] object-cover hover:translate-y-2"
            src={item.img}
          />
        ))}
      </div>
      <div className="flex justify-center items-center gap-5 mb-5 mx-5">
        {virisuIMG2.map((item) => (
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

export default Man;
