import React from "react";

const About = () => {
  return (
    <div className="h-screen flex gap-3 mx-10 mt-10 mb-10 es:flex-col md:flex-row justify-center items-center">
      <div className="md:mr-5 w-1/2 flex justify-center flex-col items-center">
        <img
          className="h-[400px] min-w-[300px] object-cover hover:translate-y-2"
          src="https://img.photolamus.com/8rV8bpS2/1280x1280/c/m/3b508621878779ae01f1c244eefbe9a9/e%C4%BC%C4%BCas-portreta-z%C4%ABm%C4%93jums-1280x1280.jpeg"
        />
      </div>
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
      </div>
    </div>
  );
};

export default About;
