import IMG1 from "../components/pages/images/Gallery/ga1.jpeg";
import IMG2 from "../components/pages/images/Gallery/ga2.jpeg";
import IMG3 from "../components/pages/images/Gallery/ga3.jpeg";
import IMG4 from "../components/pages/images/Gallery/ga4.jpeg";
import IMG5 from "../components/pages/images/Gallery/ga5.jpeg";
import IMG6 from "../components/pages/images/Gallery/ga6.jpeg";
import { ROUTES } from "../utils/routes";
import PRICE1_1 from "../components/pages/images/Price/pa1.jpeg";
import PRICE1_2 from "../components/pages/images/Price/pa2.jpeg";
import PRICE2_1 from "../components/pages/images/pasakumi/p1.jpeg";
import PRICE2_2 from "../components/pages/images/pasakumi/p2.jpeg";
import PRICE3_1 from "../components/pages/images/love/lo1.jpeg";
import PRICE3_2 from "../components/pages/images/love/lo2.jpeg";
import PRICE4_1 from "../components/pages/images/dzivnieki/dz9.jpeg";
import PRICE4_2 from "../components/pages/images/dzivnieki/d6.jpeg";
import PRICE5_1 from '../components/pages/images/grupas/GIM1.jpeg'
import PRICE5_2 from '../components/pages/images/grupas/GIM2.jpeg'

// объект для пополнения страниц Pice, подолнять предложения на страницу
export const packageData = [
  {
    title: "Individuālā fotosesija",
    titleRus: "Индивидуальная фотосессия",
    ideaRus: "идея",
    idea: "ideja",
    curruncy: "20 fotogrāfijas",
    curruncyRus: "20 фотографий",
    price: "60€",
    bonuss: "+video portrets",
    bonussRus: '+ видео портрет',
    img1: PRICE1_1,
    img2: PRICE1_2,
  },
  {
    title: "Love story",
    titleRus: "Love story",
    ideaRus: "идея",
    idea: "ideja",
    curruncy: "20 fotogrāfijas",
    curruncyRus: "20 фотографий",
    price: "70€",
    bonuss: "+video",
    bonussRus: '+ видео',
    img1: PRICE3_1,
    img2: PRICE3_2,
  },
  {
    title: "Pasākumu foto",
    titleRus: "Фотосьемка мероприятия",
    time: "~2h - 30€",
    price: "visa diena/весь день 150€",
    img1: PRICE2_1,
    img2: PRICE2_2,
  },
  {
    title: "Dzīvnieku foto",
    titleRus: "Фотосьемка животных",
    curruncy: "30 fotogrāfijas",
    curruncyRus: "30 фотографий",
    price: "60€",
    bonuss: "+ fotogrāfijas ar saimnieku",
    bonussRus: '+ фото с хозяином',
    img1: PRICE4_1,
    img2: PRICE4_2,
  },
  {
    title: "Ğimenes fotosesija",
    titleRus: "Семейная фотосессия",
    ideaRus: "идея",
    idea: "ideja",
    curruncy: "20-30 fotogrāfijas",
    curruncyRus: "20-30 фотографий",
    price: "80€",
    img1: PRICE5_1,
    img2: PRICE5_2,
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
];

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
    titleRus: "LOVE STORY",
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
