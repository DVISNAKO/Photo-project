import IMG1 from "../components/pages/images/Gallery/ga1.jpeg";
import IMG2 from "../components/pages/images/Gallery/ga2.jpeg";
import IMG3 from "../components/pages/images/Gallery/ga3.jpeg";
import IMG4 from "../components/pages/images/Gallery/ga4.jpeg";
import IMG5 from "../components/pages/images/Gallery/ga5.jpeg";
import IMG6 from "../components/pages/images/Gallery/ga6.jpeg";
import { ROUTES } from "../utils/routes";
import PRICE1 from '../components/pages/images/Price/pa1.jpeg'
import PRICE2 from '../components/pages/images/Price/pa2.jpeg'

// объект для пополнения страниц Pice, подолнять предложения на страницу
export const packageData = [
    {
      title: "Individuālā fotosesija",
      titleRus: 'Индивидуальная фотосессия',
      ideaRus: 'идея',
      idea: "ideja",
      time: "~2h",
      curruncy: "15 fotogrāfijas",
      price: "50€",
      img1: PRICE1,
      img2: PRICE2,
    },
    {
        title: "Individuālā fotosesija",
        titleRus: 'Индивидуальная фотосессия',
        ideaRus: 'идея',
        idea: "ideja",
        time: "~2h",
        curruncy: "15 fotogrāfijas",
        price: "60€",
        img1: PRICE1,
        img2: PRICE2,
    },
  ];

  //название кнопок меню
  export const menu = [
    { title: "GALERIJA", id: 1 },
    { title: "PAR_MANI", id: 2 },
    { title: "CENAS", id: 3 },
    { title: "KONTAKTI", id: 4 },
    { title: "SASNIEGUMI", id: 5 },
  ];

  export const menuRUS = [
    { title: "ГАЛЕРЕЯ", id: 1 },
    { title: "ОБО МНЕ", id: 2 },
    { title: "ЦЕНЫ", id: 3 },
    { title: "КОНТАКТЫ", id: 4 },
    { title: "ДОСТИЖЕНИЯ", id: 5 },
  ]

  //вывод на страницу галереи
  export const galeryData = [
    {
      title: "SIEVIEŠU FOTO",
      titleRus: "ЖЕНСКИЕ ФОТО",
      img: IMG1,
      route: ROUTES.SIEVIEŠU,
    },
    {
      title: "DZĪVNIEKU FOTO",
      titleRus: "ФОТО ЖИВОТНЫХ",
      img: IMG2,
      route: ROUTES.DZIVNIEKI,
    },
    {
      title: "VĪRIEŠU FOTO",
      titleRus: "МУЖСКИЕ ФОТО",
      img: IMG3,
      route: ROUTES.VIRIESI,
    },
    {
      title: "PASĀKUMU FOTO",
      titleRus: "ФОТО МЕРОПРИЯТИЙ",
      img: IMG4,
      route: ROUTES.PASAKUMI,
    },
    {
      title: "LOVE STORY",
      titleRus: "ФОТО ИСТОРИЙ",
      img: IMG5,
      route: ROUTES.LOVE,
    },
    {
      title: "ĢIMENES FOTOSESIJA",
      titleRus: "СЕМЕЙНЫЕ ФОТО",
      img: IMG6,
      route: ROUTES.GRUPAS,
    },
  ];