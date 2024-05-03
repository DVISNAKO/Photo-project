import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageState } from "../../../utils/context";
import { ROUTES } from "../../../utils/routes";
import ButtonBack from "../../ButtonBack/ButtonBack";
import IMG1 from "../images/love2/LOVESTOR1.jpeg"
import IMG2 from "../images/love2/LOVESTOR2.jpeg";
import IMG3 from "../images/love2/LOVESTOR3.jpeg";
import IMG4 from "../images/love2/LOVESTOR4.jpeg";
import IMG5 from "../images/love2/LOVESTOR5.jpeg";
import IMG6 from "../images/love2/LOVESTOR6.jpeg";

const Love = ({blockPhoto}) => {
  const loveImG1 = [{ img: IMG3 }, { img: IMG2 }, { img: IMG5 }];
  const loveImG2 = [{ img: IMG4 }, { img: IMG6 }, { img: IMG1 }];
  const [language, setLanguage] = useContext(LanguageState);

  return (
    <div className="flex justify-center items-center w-full h-full flex-col mx-5">
      <div className="flex my-6 text-[30px]">
        <h2> {language ? <>LOVE STORY</> : <>LOVE STOTY</> } </h2>
      </div>
      <div className="flex justify-center items-center gap-5 mb-5 mx-5 ">
        {loveImG1.map((item) => (
          <img
            className="w-1/3 max-h-[500px] max-w-[335px] object-cover hover:translate-y-2"
            src={item.img}
            onContextMenu={blockPhoto}
          />
        ))}
      </div>
      <div className="flex justify-center items-center gap-5 mb-5 mx-5">
        {loveImG2.map((item) => (
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

export default Love;
