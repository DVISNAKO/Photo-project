import React, { useContext } from "react";
import { FaInstagram } from "react-icons/fa6";
import { RiTiktokLine } from "react-icons/ri";
import { LanguageState } from "../../utils/context";
import IMG from './images/About/contact.jpeg'

const Contacts = ({blockPhoto}) => {
  const [language, setLanguage] = useContext(LanguageState);
  return (
    <div className="es:flex-col md:flex-row flex justify-center items-center my-10 w-screen gap-10">
      <div className="flex justify-center items-center flex-col text-nowrap w-[350px] p-4">
        {language ? (<></>) : (<></>) }
        <h2 className="m-2 text-[25px]">
        {language ? <>MY CONTACTS:</> : <>МОИ КОНТАКТЫ:</> }
        </h2>
        <h2 className="m-2"> lai13@inbox.lv</h2>
        <h2 className="m-2 border-2 p-3 rounded-xl hover:bg-slate-400">
          <a target="_blank" href="https://t.me/lainevolcite">
          {language ? <>Saziņai telegramā:</> : <>Написать в телеграм:</> }
          </a>
        </h2>
        <hr className="h-1 w-20 m-3" />
        <h2 className="m-2 text-[25px]">
        {language ? <>MANI SOCIĀLI TĪKLI </> : <>МОИ СОЦ. СЕТИ:</> }</h2>
        <div className="flex gap-1 ml-3 cursor-pointer">
          <div className="hover:bg-slate-400 rounded-xl p-3 text-[30px]">
            <a
              target="_blank"
              href="https://www.instagram.com/volcites_photos?igsh=cnJuam13anZtaGJ0&utm_source=qr"
            >
              <FaInstagram />
            </a>
          </div>
          <div className="hover:bg-slate-400 rounded-xl p-3 text-[30px]">
            <a
              target="_blank"
              href="https://tiktok.com/@volcites_photos?_t=8kGdMatiX4L&_r=1"
            >
              <RiTiktokLine />
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <img
          className="max-h-[600px] max-w-[500px] object-cover hover:translate-y-2"
          src={IMG}
          onContextMenu={blockPhoto}
        />
      </div>
    </div>
  );
};

export default Contacts;
