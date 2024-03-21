import IMG1 from "../components/pages/images/sieviesu/s1.jpeg";
import IMG2 from "../components/pages/images/dzivnieki/d6.jpeg";
import IMG3 from "../components/pages/images/viriesi/m5.jpeg";
import IMG4 from "../components/pages/images/pasakumi/p1.jpeg";
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
    { title: "Gallery", id: 1 },
    { title: "About", id: 2 },
    { title: "Price", id: 3 },
    { title: "Contacts", id: 4 },
    { title: "Partners", id: 5 },
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
      title: "VIDEO PORT",
      img: IMG4,
      route: ROUTES.PASAKUMI,
    },
    {
      title: "GRUPAS FOTO",
      img: IMG4,
      route: ROUTES.GRUPAS,
    },
  ];