import React, { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const navigation = [
  {
    title: "Home",
    path: "/dashboard",
  },
  {
    title: "Products",
    path: "/dashboard/products",
  },
  {
    title: "About",
    path: "/dashboard/about",
  },
];

const Navbar = () => {
    const [show, setShow] = useState(show)
  return (
    <nav className="bg-navbarColor md:text-sm">
      <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
        <div className="flex items-center justify-between py-5 md:block ">
          <a
            href="https://clarusway.com/"
            target="true"
            className="flex items-center"
          >
            <img src={logo} alt="clarusway" width={50} height={50} />
            <span className="text-gray-700 hover:text-gray-900 font-medium">
              Clarusway
            </span>
          </a>
          <div className="md:hidden">
            <button className="menu-btn text-gray-500 hover:text-gray-800" onClick={()=> setShow(!show)}>
              {show ? closeNavbar :  openNavbar }
            </button>
          </div>
        </div>
        <div className={`${show ? "flex flex-col pb-2" : "hidden" }md:flex md:flex-row flex-1 items-center`}>
          <ul className="space-y-6 md:flex md:space-x-6 md:space-y-6 ">
            {navigation.map((item) => (
              <li
                key={item.title}
                className="text-gray-700 font-medium flex justify-center"
              >
                <NavLink
                  to={item.path}
                  className="block hover:bg-main rounded-full py-2 px-4 hover:text-white"
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
