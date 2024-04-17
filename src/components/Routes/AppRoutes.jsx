import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

import About from "../pages/About";
import Contacts from "../pages/Contacts";
import Sievesu from "../pages/GalerryPages/Sievesu";
import Gallery from "../pages/Gallery";
import Price from "../pages/Price";
import Grupas from "../pages/GalerryPages/Grupas";
import Dzivnieki from "../pages/GalerryPages/Dzivnieki";
import Pasakumi from "../pages/GalerryPages/Pasakumi";
import Man from "../pages/GalerryPages/Man";
import Sasniegumi from '../pages/Sasniegumi'
import Love from "../pages/GalerryPages/Love";

const AppRoutes = ({blockPhoto}) => {
  return (
    <div className="flex w-full justify-center">
      <Routes>
        <Route path={ROUTES.GALERIJA} index element={<Gallery blockPhoto={blockPhoto}/>} />
        <Route path={ROUTES.PAR_MANI} element={<About blockPhoto={blockPhoto}/>} />
        <Route path={ROUTES.CENAS} element={<Price blockPhoto={blockPhoto}/>} />
        <Route path={ROUTES.KONTAKTI} element={<Contacts blockPhoto={blockPhoto}/>} />
        <Route path={ROUTES.SASNIEGUMI} element={<Sasniegumi blockPhoto={blockPhoto}/>} />
        <Route path={ROUTES.SIEVIEŠU} element={<Sievesu blockPhoto={blockPhoto}/>} />
        <Route path={ROUTES.GRUPAS} element={<Grupas blockPhoto={blockPhoto}/>} />
        <Route path={ROUTES.DZIVNIEKI} element={<Dzivnieki blockPhoto={blockPhoto}/>} />
        <Route path={ROUTES.PASAKUMI} element={<Pasakumi blockPhoto={blockPhoto}/>} />
        <Route path={ROUTES.VIRIESI} element={<Man blockPhoto={blockPhoto}/>} />
        <Route path={ROUTES.LOVE} element={<Love blockPhoto={blockPhoto}/>} />
        <Route path="*" element={<Navigate to={ROUTES.GALERIJA} />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
