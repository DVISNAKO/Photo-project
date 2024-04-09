import React, { useContext } from "react";
import { LanguageState } from "../../utils/context";

const singlePrice = ({ packageData }) => {
  const { title, idea, time, curruncy, gift, price, img1, img2, titleRus, ideaRus } = packageData;
  const [language, setLanguage] = useContext(LanguageState);

  return (
    <>
      <div className="flex justify-center items-center mt-5 flex-col mx-5">
        <h2 className="mb-5 font-bold">
          {language ? title : titleRus}
         </h2>
        <div className="flex justify-center flex-row gap-5 mx-5">
          <img
            className="w-1/2 max-h-[400px] max-w-[300px] object-cover hover:translate-y-2"
            src={img1}
          />
          <img
            className="w-1/2 max-h-[400px] max-w-[300px] object-cover hover:translate-y-2"
            src={img2}
          />
        </div>
      </div>
      <div className=" text-nowrap mt-10 mx-10 p-3 max-h-[400px] min-w-[200px] max-w-[400px] border-2 hover:bg-gray-100">
        {language ? (
          <>
            <h2 className="mb-3 font-bold">{title}</h2>
            <li>{idea}</li>
            <li>{time}</li>
            <li>{curruncy}</li>
            <li>{price}</li>
          </>
        ) : (
          <>
            <h2 className="mb-3 font-bold">{titleRus}</h2>
            <li>{ideaRus}</li>
            <li>{time}</li>
            <li>{curruncy}</li>
            <li>{price}</li>
          </>
        )}
      </div>
      <hr className="my-4 h-0,5 bg-slate-200" />
    </>
  );
};

export default singlePrice;
