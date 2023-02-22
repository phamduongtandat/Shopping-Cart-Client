import React, { useContext, useState, createContext } from 'react'
import { Link } from 'react-router-dom'
import { SearchContext } from '../Context/SearchContext';
import BagdeCart from './BagdeCart';


const AmountContext = createContext();
const AmountProvider = ({ children }) => {

  const amountStorage = JSON.parse(localStorage.getItem("amountItem")) ?? 0
  const [amount, setAmount] = useState(amountStorage);
  return (
    <AmountContext.Provider value={{ amount, setAmount }}>
      {children}
    </AmountContext.Provider>)
}



function Header() {


  const { keyWord, handleSearch } = useContext(SearchContext)

  const { amount } = useContext(AmountContext)
  //console.log('keyWord', keyWord)

  return (
    <nav style={{ position: 'fixed', top: '0', width: '100%', zIndex: 1 }} className="navbar navbar-expand-lg navbar-light bg-info">
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

            <li className=" position-relative nav-item">
              <Link className="  btn btn-outline-dark " to='/Cart'>Cart  </Link>
              {amount > 0 && <BagdeCart amount={amount} />}
            </li>

          </ul>

        </div>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <input className="form-control" placeholder="Search..." defaultValue={keyWord}
                onChange={handleSearch} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export { AmountContext, AmountProvider }
export default Header

