import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Component/Header";

function Container({ keyWork, setKeyWork }) {
  return (
    <div>
      <Header keyWork={keyWork} setKeyWork={setKeyWork} />
      <Outlet />
    </div>
  );
}

export default Container;
