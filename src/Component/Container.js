import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Component/Header";
import Headerr from "./Headerr";



function Container() {

    return (
        <div>
            {/* <Headerr /> */}
            <Header />
            <div style={{ marginTop: "100px" }}>
                <Outlet />
            </div>
        </div>
    );
}

export default Container;
