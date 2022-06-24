import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { navbarItems } from "../../utils/navbar";
import Sidebar from "../Sidebar";
const Root = () => {
  return (
    <div style={{ minWidth: "343px" }}>
      <Routes>
        <Route path="/" element={<Navigate to={"/hotel"} />} />
        <Route element={<Sidebar />}>
          {navbarItems.map(({ path, id, Element, visible }) => {
            return visible && <Route key={id} path={path} element={Element} />;
          })}
        </Route>
      </Routes>
    </div>
  );
};
export default Root;
