import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Header({keyWord,setKeyWork}) {
  const storage = JSON.parse(localStorage.getItem('cartStorage')) ?? []
  const  handleChange =(e) =>{
    setKeyWork(e.target.value)
  }
  return (
    <nav style={{position: 'fixed',top: '0',width: '100%',zIndex:1}} className="navbar navbar-expand-lg navbar-light bg-light">
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
              <Link className="  btn btn-outline-dark " to='/Cart'>Cart <b>{storage.length}</b> </Link>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <input  class="form-control" placeholder="Tìm kiếm" value={keyWord} 
                   onChange={handleChange} />
            </li>
            <li>
            <button type="submit" class="btn btn-primary">Submit</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header

