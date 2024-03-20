import React from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../../utils/routes";

import About from "../pages/About";
import Contacts from "../pages/Contacts";
import Sievesu from "../pages/GalerryPages/Sievesu";
import Gallery from "../pages/Gallery";
import Partners from "../pages/Partners";
import Price from "../pages/Price";
import Grupas from "../pages/GalerryPages/Grupas";
import Dzivnieki from "../pages/GalerryPages/Dzivnieki";

const AppRoutes = () => {
  return (
    <div className="flex w-full justify-center">
      <Routes>
        <Route path={ROUTES.GALLERY} index element={<Gallery />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.PRICE} element={<Price />} />
        <Route path={ROUTES.CONTACTS} element={<Contacts />} />
        <Route path={ROUTES.PARTNERS} element={<Partners />} />
        <Route path={ROUTES.SIEVEŠU} element={<Sievesu />} />
        <Route path={ROUTES.GRUPAS} element={<Grupas />} />
        <Route path={ROUTES.DZIVNIEKI} element={<Dzivnieki/>} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
