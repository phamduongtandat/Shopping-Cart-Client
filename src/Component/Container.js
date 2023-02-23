import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Component/Header";


function Container() {

  return (
    <div>
      <Header />

      <div style={{ marginTop: "100px" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Container;
