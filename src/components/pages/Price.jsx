import React from "react";
import SinglePrice from "../SinglePage/SinglePrice";
import { packageData } from "../../utils/constants";

const Price = () => {
  return (
    <div>
      {packageData.map((packageData, index) => (
        <SinglePrice key={index} packageData={packageData} />
      ))}
    </div>
  );
};

export default Price;
