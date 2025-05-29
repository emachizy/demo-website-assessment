import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex">
        <div>
          <Link to="/">Emmanuel</Link>
        </div>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
