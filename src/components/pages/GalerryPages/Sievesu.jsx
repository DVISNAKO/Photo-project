import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageState } from "../../../utils/context";
import { ROUTES } from "../../../utils/routes";
import ButtonBack from "../../ButtonBack/ButtonBack";
import IMG1 from "../images/ILgu/ILGU1.jpeg";
import IMG2 from "../images/ILgu/ILGU2.jpeg";
import IMG3 from "../images/ILgu/ILGU3.jpeg";
import IMG4 from "../images/ILgu/ILGU4.jpeg";
import IMG5 from "../images/ILgu/ILGU5.jpeg";
import IMG6 from "../images/ILgu/ILGU6.jpeg";

const Sievesu = ({blockPhoto}) => {
  const [language, setLanguage] = useContext(LanguageState);
  const sieviesuIMG1 = [{ img: IMG1 }, { img: IMG2 }, { img: IMG3 }];
  const sieviesuIMG2 = [{ img: IMG4 }, { img: IMG5 }, { img: IMG6 }];

  return (
    <div className="flex justify-center items-center w-full h-full flex-col mx-5">
      <div className="flex my-6 text-[30px]">
      <h2> {language ? <>SIEVIEŠU FOTO </> : <>ЖЕНСКИЕ ФОТО</> } </h2>
      </div>
      <div className="flex justify-center items-center gap-5 mb-5 mx-5 ">
        {sieviesuIMG1.map((item) => (
          <img
            className="w-1/3 max-h-[500px] max-w-[400px] object-cover hover:translate-y-2"
            src={item.img}
            onContextMenu={blockPhoto}
          />
        ))}
      </div>
      <div className="flex justify-center items-center gap-5 mb-5 mx-5">
        {sieviesuIMG2.map((item) => (
          <img
            className="w-1/3 max-h-[500px] max-w-[400px] object-cover hover:translate-y-2"
            src={item.img}
            onContextMenu={blockPhoto}
          />
        ))}
      </div>
      <div className="mb-5 hover:text-var(--color-pink)">
       <ButtonBack/>
      </div>
    </div>
  );
};

export default Sievesu;
