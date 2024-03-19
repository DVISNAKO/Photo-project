import React from "react";

const singlePrice = ({ packageData }) => {
  const { title, idea, time, curruncy, gift, price, img } = packageData;

  return (
    <>
      <div className="flex justify-center items-center mt-5 flex-col mx-5">
        <h2 className="mb-5">{title}</h2>
        <div className="flex flex-row gap-5">
          <img
            className="w-1/2 max-h-[400px] max-w-[300px] object-cover hover:translate-y-2"
            src={img}
          />
          <img
            className="w-1/2 max-h-[400px] max-w-[300px] object-cover hover:translate-y-2"
            src={img}
          />
        </div>
      </div>
      <div className=" text-nowrap mt-10 mx-10 p-3 max-h-[400px] min-w-[200px] max-w-[400px] border-2 hover:bg-gray-100">
        <h2 className="mb-3">{title}</h2>
        <li>{idea}</li>
        <li>{time}</li>
        <li>{curruncy}</li>
        <li>{gift}</li>
        <li>{price}</li>
      </div>
      <hr className="my-4 h-0,5 bg-slate-200" />
    </>
  );
};

export default singlePrice;
