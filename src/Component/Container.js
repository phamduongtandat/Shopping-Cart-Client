import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Component/Header';

function Container() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default Container
