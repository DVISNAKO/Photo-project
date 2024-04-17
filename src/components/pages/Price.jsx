import React, { useContext } from "react";
import SinglePrice from "../SinglePage/SinglePrice";
import { packageData } from "../../utils/constants";


const Price = ({blockPhoto}) => {
  return (
    <div>
      {packageData.map((packageData, index) => (
        <SinglePrice key={index} packageData={packageData} blockPhoto={blockPhoto} />
      ))}
    </div>
  );
};

export default Price;
