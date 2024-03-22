import IMG1 from "../components/pages/images/Gallery/ga1.jpeg";
import IMG2 from "../components/pages/images/Gallery/ga2.jpeg";
import IMG3 from "../components/pages/images/Gallery/ga3.jpeg";
import IMG4 from "../components/pages/images/Gallery/ga4.jpeg";
import IMG5 from "../components/pages/images/Gallery/ga5.jpeg";
import IMG6 from "../components/pages/images/Gallery/ga6.jpeg";
import { ROUTES } from "../utils/routes";

// объект для пополнения страниц Pice, подолнять предложения на страницу
export const packageData = [
    {
      title: "Package 1",
      idea: "idea about ......",
      time: "~1,5h",
      curruncy: "20 photo",
      gift: "gift will be",
      price: "200 euro",
      img: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
    },
    {
      title: "Package 2",
      idea: "idea about ......",
      time: "~2h",
      curruncy: "20 photo",
      gift: "gift will be",
      price: "200 euro",
      img: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
    },
  ];

  //название кнопок меню
  export const menu = [
    { title: "GALERIJA", id: 1 },
    { title: "ABOUT", id: 2 },
    { title: "CENAS", id: 3 },
    { title: "KONTAKTI", id: 4 },
    { title: "SASNIEGUMI", id: 5 },
  ];

  //вывод на страницу галереи
  export const galeryData = [
    {
      title: "SIEVIEŠU FOTO",
      img: IMG1,
      route: ROUTES.SIEVEŠU,
    },
    {
      title: "DZĪVNIEKU FOTO",
      img: IMG2,
      route: ROUTES.DZIVNIEKI,
    },
    {
      title: "VĪRIEŠU FOTO",
      img: IMG3,
      route: ROUTES.VIRIESI,
    },
    {
      title: "PASĀKUMU FOTO",
      img: IMG4,
      route: ROUTES.PASAKUMI,
    },
    {
      title: "LOVE STORY",
      img: IMG5,
      route: ROUTES.LOVE,
    },
    {
      title: "ĢIMENES FOTOSESIJA",
      img: IMG6,
      route: ROUTES.GRUPAS,
    },
  ];