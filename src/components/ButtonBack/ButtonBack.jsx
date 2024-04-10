import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LanguageState } from "../../utils/context";
import './Button.css';

const ButtonBack = () => {
    const [language, setLanguage] = useContext(LanguageState);

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <button onClick={goBack} className="m-2 border-2 p-3 rounded-xl">
      <Link>{language ? <h2>Atpakaļ uz galeriju</h2> : <h2>Обратно в галерею</h2>}</Link>
    </button>
  );
};

export default ButtonBack;
