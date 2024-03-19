import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../utils/routes";

const LoveStory = () => {
  return (
    <div className="flex justify-center items-center w-full h-full flex-col mx-5">
      <div className="flex gap-5 mt-5 es:flex-col lg:flex-row ">
        <img
          className="flex justify-center items-center object-cover max-h-[600px] max-w-[500px] hover:translate-y-2"
          src="https://images.unsplash.com/photo-1620223765082-a6a441145be9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbiUyMHdhbGtpbmd8ZW58MHx8MHx8fDA%3D"
        />
        <img
          className="flex justify-center items-center object-cover max-h-[600px] max-w-[500px] hover:translate-y-2"
          src="https://images.unsplash.com/photo-1620223765082-a6a441145be9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbiUyMHdhbGtpbmd8ZW58MHx8MHx8fDA%3D"
        />
      </div>
      <div className="flex my-5">
        <h2>some text for block</h2>
      </div>
      <div className="flex my-6 text-[30px]">
        <h2>LOVE STORY</h2>
      </div>
      <div className="flex justify-center items-center gap-5 mb-5 mx-5 ">
        <img
           className="w-1/3 max-h-[500px] max-w-[400px] object-cover hover:translate-y-2"
          src="https://images.pexels.com/photos/3369473/pexels-photo-3369473.jpeg"
        />
        <img
          className="w-1/3 max-h-[500px] max-w-[400px] object-cover hover:translate-y-2"
          src="https://images.pexels.com/photos/3369473/pexels-photo-3369473.jpeg"
        />
        <img
         className="w-1/3 max-h-[500px] max-w-[400px] object-cover hover:translate-y-2"
          src="https://images.pexels.com/photos/3369473/pexels-photo-3369473.jpeg"
        />
      </div>
      <div className="flex justify-center items-center gap-5 mb-5 mx-5">
        <img
           className="w-1/3 max-h-[500px] max-w-[400px] object-cover hover:translate-y-2"
          src="https://images.pexels.com/photos/3369473/pexels-photo-3369473.jpeg"
        />
        <img
          className="w-1/3 max-h-[500px] max-w-[400px] object-cover hover:translate-y-2"
          src="https://images.pexels.com/photos/3369473/pexels-photo-3369473.jpeg"
        />
        <img
         className="w-1/3 max-h-[500px] max-w-[400px] object-cover hover:translate-y-2"
          src="https://images.pexels.com/photos/3369473/pexels-photo-3369473.jpeg"
        />
      </div>
      <div className="mb-5 hover:text-orange-200"><button><Link to={ROUTES.GALLERY}>Back to gallery</Link></button></div>
    </div>
  );
};

export default LoveStory;
