import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  const linkBaseStyle =
    "transition-colors duration-300 hover:text-white text-gray-400";
  const activeStyle = "text-white font-medium";

  return (
    <>
      <nav className="flex justify-between items-center px-4 sm:px-8 lg:px-16 py-4 text-white">
        <div className="text-xl font-bold tracking-wide">
          <Link to="/" className="hover:text-gray-300 transition">
            Emmanuel
          </Link>
        </div>
        <div className="hidden md:flex space-x-20 text-sm sm:text-base">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${linkBaseStyle} ${isActive ? activeStyle : ""}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              `${linkBaseStyle} ${isActive ? activeStyle : ""}`
            }
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `${linkBaseStyle} ${isActive ? activeStyle : ""}`
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${linkBaseStyle} ${isActive ? activeStyle : ""}`
            }
          >
            Contact
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
