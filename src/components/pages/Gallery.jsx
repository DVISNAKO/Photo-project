import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

const Gallery = () => {
  return (
    <div className="flex justify-center items-center h-full my-10 flex-wrap gap-5 mx-10 border-black">
      <div className="cursor-pointer hover:translate-y-2 hover:text-orange-400 basis-1/4">
        <Link to={ROUTES.SIEVEŠU}>
          <img
            className="flex justify-center items-center object-cover max-h-[600px] max-w-[500px]"
            src="https://images.unsplash.com/photo-1621012430307-b4774b78d3cb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <h2 className="flex justify-center mt-5 ">SIEVEŠU FOTO</h2>
        </Link>
      </div>
      <div className="cursor-pointer hover:translate-y-2 hover:text-orange-400 basis-1/4">
        <Link to={ROUTES.DZIVNIEKI}>
                <img
          className="flex justify-center items-center object-cover max-h-[600px] max-w-[500px]"
          src="https://images.unsplash.com/photo-1621012430307-b4774b78d3cb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <h2 className="flex justify-center mt-5 ">DZĪVNIEKU FOTO</h2>
        </Link>

      </div>
      <div className="cursor-pointer hover:translate-y-2 hover:text-orange-400 basis-1/4">
        <img
          className="flex justify-center items-center object-cover max-h-[600px] max-w-[500px]"
          src="https://images.unsplash.com/photo-1621012430307-b4774b78d3cb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <h2 className="flex justify-center mt-5 ">MAN PHOTO</h2>
      </div>
      <div className="cursor-pointer hover:translate-y-2 hover:text-orange-400 basis-1/4">
        <img
          className="flex justify-center items-center object-cover max-h-[600px] max-w-[500px] "
          src="https://images.unsplash.com/photo-1621012430307-b4774b78d3cb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <h2 className="flex justify-center mt-5 ">WOMAN PHOTO</h2>
      </div>
      <div className="cursor-pointer hover:translate-y-2 hover:text-orange-400 basis-1/4">
        <img
          className="flex justify-center items-center object-cover max-h-[600px] max-w-[500px]"
          src="https://images.unsplash.com/photo-1621012430307-b4774b78d3cb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <h2 className="flex justify-center mt-5 ">VIDEO PORT</h2>
      </div>
      <div className="cursor-pointer hover:translate-y-2 hover:text-orange-400 basis-1/4">
        <Link to={ROUTES.GRUPAS}>
        <img
          className="flex justify-center items-center object-cover max-h-[600px] max-w-[500px]"
          src="https://images.unsplash.com/photo-1621012430307-b4774b78d3cb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <h2 className="flex justify-center mt-5 ">GRUPAS FOTO</h2>
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
