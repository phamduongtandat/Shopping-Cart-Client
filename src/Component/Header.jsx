import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container">
        <img src="https://cdn.pixabay.com/photo/2016/01/13/02/03/byeongsinnyeon-1137035_960_720.png" alt='' width={55} height={55} />
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to='/'>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link-info active" to='/Pet'>Pet</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header

