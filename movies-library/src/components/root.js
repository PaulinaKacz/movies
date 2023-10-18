import { Outlet } from "react-router-dom";
import React from "react";

const Root = ({ className }) => (
  <div className={className}>
    <Outlet />
  </div>
);

export default Root;
