import React from "react";
import { Route, Routes } from "react-router-dom";
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

const AppRoutes = () => {
  return (
    <div className="flex w-full justify-center">
      <Routes>
        <Route path={ROUTES.GALERIJA} index element={<Gallery />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.CENAS} element={<Price />} />
        <Route path={ROUTES.KONTAKTI} element={<Contacts />} />
        <Route path={ROUTES.SASNIEGUMI} element={<Sasniegumi />} />
        <Route path={ROUTES.SIEVIEŠU} element={<Sievesu />} />
        <Route path={ROUTES.GRUPAS} element={<Grupas />} />
        <Route path={ROUTES.DZIVNIEKI} element={<Dzivnieki/>} />
        <Route path={ROUTES.PASAKUMI} element={<Pasakumi/>} />
        <Route path={ROUTES.VIRIESI} element={<Man/>} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
