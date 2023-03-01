import React, { useContext, useState, createContext, } from 'react'
import { Link, useNavigate } from 'react-router-dom'
//import { LoginContext } from '../Context/LoginContext';
//import { SearchProvider } from '../Context/SearchContext';

import BagdeCart from './BagdeCart';
import Search from './Search';




const AmountContext = createContext();
const AmountProvider = ({ children }) => {

    const amountStorage = JSON.parse(localStorage.getItem("amountItem")) ?? 0
    const [amount, setAmount] = useState(amountStorage);
    return (
        <AmountContext.Provider value={{ amount, setAmount }}>
            {children}
        </AmountContext.Provider>)
}



function Headerr() {
    const { amount } = useContext(AmountContext)
    const navigate = useNavigate()
    let user = JSON.parse(localStorage.getItem('user'))
    let isLogin = JSON.parse(localStorage.getItem('isLogin'))

    const handLogout = () => {
        localStorage.setItem('isLogin', JSON.stringify(false));
        navigate('/Login')
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">





            <div className="container">

                <img className="navbar-brand" src="https://cdn.pixabay.com/photo/2016/01/13/02/03/byeongsinnyeon-1137035_960_720.png" alt='' width={52} height={50} />

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>



                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">


                        <li className=" nav-item">
                            <Link className="btn " to='/'>Home</Link>
                        </li>

                        <li className=" nav-item">
                            <Link className="  btn  " to='/Pet'>Pet</Link>
                        </li>

                        {isLogin
                            ?
                            <li className=" position-relative nav-item">
                                <Link className="  btn  " to='/Cart'>
                                    <i style={{ color: '#4E31AA' }} className={amount > 0 ? 'fa-beat fa-solid fa-xl fa-cart-arrow-down' : 'fa-solid fa-xl fa-cart-arrow-down'}></i>
                                </Link>
                                {amount > 0 && <BagdeCart amount={amount} />}
                            </li>
                            :
                            <li className=" position-relative nav-item">
                                <Link className="  btn  " to='/Login'>
                                    <i style={{ color: '#4E31AA' }} className='fa-solid fa-xl fa-cart-arrow-down'></i>
                                </Link>
                            </li>
                        }

                        <div className=" nav-item p-2 collapse navbar-collapse">

                            <Search />
                        </div>


                        {isLogin ?



                            <li className=" nav-item">
                                <div className=" text-danger fs-5 btn nav-item">
                                    Welcome  {user.fullName.toUpperCase()}
                                </div>

                                <button onClick={handLogout} className="btn btn-warning ">Logout</button>
                            </li>

                            // <div className=" p-2 collapse navbar-collapse">
                            //     <ul className=" d-flex align-items-center p-1 navbar-nav me-auto mb-2 mb-lg-0">

                            //         <li className=" text-danger fs-5 btn nav-item">
                            //             Welcome  {user.fullName.toUpperCase()}
                            //         </li>

                            //         <li className=" nav-item">
                            //             <button onClick={handLogout} className="btn btn-warning ">Logout</button>
                            //         </li>
                            //     </ul>
                            // </div>

                            :

                            <div>
                                <li className=" nav-item">
                                    <Link className="btn btn-outline-dark" to='/Login'>Login</Link>
                                </li>

                                <li className=" nav-item">
                                    <Link className="  btn  " to='/Register'>Register</Link>
                                </li>
                            </div>

                            // <div className=" p-2 collapse navbar-collapse">
                            //     <ul className=" p-1 navbar-nav me-auto mb-2 mb-lg-0">

                            //         <li className=" nav-item">
                            //             <Link className="btn btn-outline-dark" to='/Login'>Login</Link>
                            //         </li>

                            //         <li className=" nav-item">
                            //             <Link className="  btn  " to='/Register'>Register</Link>
                            //         </li>
                            //     </ul>
                            // </div>
                        }

                    </ul>

                </div>
            </div>
        </nav>
    )
}
export { AmountContext, AmountProvider }
export default Headerr
