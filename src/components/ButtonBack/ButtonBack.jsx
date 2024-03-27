import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ButtonBack = () => {

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <button onClick={goBack} className="m-2 border-2 p-3 rounded-xl">
      <Link>Back to gallery</Link>
    </button>
  );
};

export default ButtonBack;
