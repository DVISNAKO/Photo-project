import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { galeryData } from "../../utils/constants";
import { LanguageState } from "../../utils/context";

const Gallery = () => {
  const [language, setLanguage] = useContext(LanguageState);


  return (
    <div className="flex justify-center items-center h-full my-10 flex-wrap gap-5 mx-10 border-black">
      {galeryData.map((item) => (
        <div
          key={item.id}
          className="cursor-pointer hover:translate-y-2 hover:text-pink-400 basis-1/4"
        >
          <Link to={item.route}>
            <img
              className="flex justify-center items-center object-cover max-h-[600px] max-w-[500px]"
              src={item.img}
            />
            <h2 className="flex justify-center mt-5">
              {language ? item.title : item.titleRus}
            </h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
