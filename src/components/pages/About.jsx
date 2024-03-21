import React from "react";
import IMG from '../pages/images/About/about.jpeg'

const About = () => {
  return (
    <div className="es:my-20 mx-5 md:mx-5 mb-5 h-full flex gap-3 es:flex-col md:flex-row justify-center items-center">

      <div className="es:mt-10w-1/2 h-[400px] md:max-w-[550px] flex justify-center flex-col items-center">
        <h2>Hello!</h2>
        <br />
        <p className="indent-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          libero magni quibusdam mollitia nulla excepturi illo consequuntur
          optio nam. Est exercitationem labore ipsa deleniti nobis a magni,
          facere ex eius.
        </p>
        <br />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          libero magni quibusdam mollitia nulla excepturi illo consequuntur
          optio nam. Est exercitationem labore ipsa deleniti nobis a magni,
          facere ex eius.
        </p>
        <br />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          libero magni quibusdam mollitia nulla excepturi illo consequuntur
          optio nam. Est exercitationem labore ipsa deleniti nobis a magni,
          facere ex eius.
        </p>
      </div>      <div className="md:mr-5 w-1/2 flex justify-center flex-col items-center">
        <img
          className="h-[400px] min-w-[300px] object-cover hover:translate-y-2"
          src={IMG}

        />
      </div>
    </div>
  );
};

export default About;
