import React from "react";
import IMG from "../pages/images/About/about.jpeg";

const About = () => {
  return (
    <div className="es:my-20 mx-10 md:mx-5 mb-5 h-full flex gap-5 es:flex-col md:flex-row justify-center items-center">
      <div className="es:mt-10w-1/2 h-[400px] md:max-w-[550px] flex justify-center flex-col items-center">
        <h2 className="text-xl">Prieks iepazīties, mani sauc Laine!</h2>
        <br />
        <p className="indent-5 text-lg">
          Es esmu pabeigusi Rēzeknes Mākslas un dizaina vidusskolu, kurā ieguvu
          kvalifikāciju - foto dizaina speciālists. Pati sevi vēl joprojām
          uzskatu par fotogrāfu iesācēju. Fotogrāfijā man patīk eksperimentēt,
          neesmu fans ierastajām, mākslīgajām bildēm, kuras kaut kur mājās
          rāmītī ir katram otrajam.
        </p>
      </div>
      <div className="md:mr-5 w-1/2 flex justify-center flex-col items-center">
        <img
          className="h-[400px] min-w-[300px] object-cover hover:translate-y-2"
          src={IMG}
        />
      </div>
    </div>
  );
};

export default About;
