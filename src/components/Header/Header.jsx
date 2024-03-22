import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { CiMenuBurger } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { menu } from '../../utils/constants';
import LOGO from "./logo.png";


const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (title) => {
    setActiveMenu(title);
    setToggle(false);
  };

  return (
    <nav className="w-full flex items-center py-5 justify-around bg-gradient-to-r from-rose-300 to-pink-500">
      <div className="w-full flex justify-around items-center max-w-7x1 max-auto mx-6">
        <Link to={ROUTES.GALERIJA} className="flex items-center ">
          <img className="h-10" src={LOGO} />
        </Link>
        <div className="hidden sm:flex flex-row gap-2">
          {menu.map((item) => (
            <Link
              to={ROUTES[item.title.toUpperCase()]}
              className={`mr-2 ${
                activeMenu === item.title ? "text-pink-200" : ""
              }`}
              onClick={() => handleMenuClick(item.title)}
              key={item.id}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="sm:hidden flex flex-1 justify-end items-end mr-5 flex-col">
          <div onClick={() => setToggle(!toggle)}>
            {toggle ? (
              <CiMenuFries className="text-[30px]" />
            ) : (
              <CiMenuBurger className="text-[30px] z-10" />
            )}
          </div>
          <div
            className={`${
              !toggle ? "hidden" : "flex transition ease-in-out delay-1000"
            } `}
          >
            <div className="absolute top-0 bottom-0 right-0 bg-gradient-to-r from-rose-300 to-pink-500 w-screen">
              <div className="flex mt-5 ml-20 gap-6 items-start flex-col">
                <CiMenuFries
                  className="text-[30px]"
                  onClick={() => setToggle(!toggle)}
                />
                {menu.map((item) => (
                  <Link
                    onClick={() => handleMenuClick(item.title)}
                    to={ROUTES[item.title.toUpperCase()]}
                    className={`mr-2 ${
                      activeMenu === item.title ? "text-pink-200" : ""
                    }`}
                    key={item.id}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
