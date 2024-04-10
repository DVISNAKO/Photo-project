import React, { useContext } from "react";
import { LanguageState } from "../../utils/context";
import IMG from "../pages/images/About/about.jpeg";

const About = () => {
  const [language, setLanguage] = useContext(LanguageState);

  return (
    <div className="es:my-10 mx-5 md:mx-10 mb-5 h-full flex gap-5 es:flex-col md:flex-row justify-center items-center">
      <div className="es:mt-10 w-1/2 h-[400px] md:max-w-[550px] mr-5 flex justify-center flex-col items-center">
        {language ? (
          <>
            <h2 className="text-xl font-bold">
              Prieks iepazīties, mani sauc Laine!
            </h2>
            <br />
            <p className="indent-5 text-lg">
              Es esmu pabeigusi Rēzeknes Mākslas un dizaina vidusskolu, kurā
              ieguvu kvalifikāciju - foto dizaina speciālists. Pati sevi vēl
              joprojām uzskatu par fotogrāfu iesācēju. Fotogrāfijā man patīk
              eksperimentēt, neesmu fans ierastajām, mākslīgajām bildēm, kuras
              kaut kur mājās rāmītī ir katram otrajam.
            </p>
          </>
        ) : (
          <>
            <h2 className="text-xl font-bold">
              Приятно познакомится, я Лайне!
            </h2>
            <br />
            <p className="indent-5 text-lg">
              Я закончила Резекненскую среднюю школу искусства и дизайна, где
              получила квалификацию – специалист по фотодизайну. Я до сих пор
              считаю себя начинающим фотографом. Я люблю экспериментировать в
              фотографии, я не фанат обычных, искусственных фотографий, которые
              есть у каждого второго в рамке где-нибудь дома.
            </p>
          </>
        )}
      </div>
      <div className="es:mt-10 md:mr-5 w-1/2 flex justify-center flex-col items-center">
        <img
          className="h-[400px] min-w-[450px] object-cover hover:translate-y-2"
          src={IMG}
        />
      </div>
    </div>
  );
};

export default About;
