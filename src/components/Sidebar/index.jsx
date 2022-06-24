import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { navbarItems } from "../../utils/navbar.js";
const Navbar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__items">
        {navbarItems.map(({ title, id, path, icon }) => {
          return (
            <NavLink
              style={({ isActive }) => {
                return {
                  background: isActive && "red",
                  color: isActive ? "white" : "white",
                  textDecoration: "none",
                  stroke: isActive ? "red" : "white",
                  fill: isActive ? "red" : "white",
                };
              }}
              key={id}
              to={path}
            >
              <div className=" item">
                <div className="item__icons">{icon}</div>
                <div className="item__title">{title}</div>
              </div>
            </NavLink>
          );
        })}
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
