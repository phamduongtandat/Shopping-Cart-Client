import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <img src="https://cdn.pixabay.com/photo/2016/01/13/02/03/byeongsinnyeon-1137035_960_720.png" alt='' width={52} height={52} />
        <div className=" p-2 collapse navbar-collapse">
          <ul className=" p-1 navbar-nav me-auto mb-2 mb-lg-0">
            <li className=" nav-item">
              <Link className="btn btn-outline-dark" to='/'>Home</Link>
            </li>
            <li className=" nav-item">
              <Link className="  btn btn-outline-dark " to='/Pet'>Pet</Link>
            </li>
            <li className=" nav-item">
              <Link className="  btn btn-outline-dark " to='/Cart'>Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header

