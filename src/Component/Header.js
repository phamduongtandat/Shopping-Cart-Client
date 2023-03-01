import React, { useContext, useState, createContext, } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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


function Header() {

  const { amount } = useContext(AmountContext)
  const navigate = useNavigate()
  let user = JSON.parse(localStorage.getItem('user'))
  let isLogin = JSON.parse(localStorage.getItem('isLogin'))

  const handLogout = () => {
    localStorage.setItem('isLogin', JSON.stringify(false));
    navigate('/Login')
  }

  return (

    <nav style={{ position: 'fixed', top: '0', width: '100%', zIndex: 1 }} className="navbar navbar-expand-lg navbar-light bg-info">


      <div className="container">

        <img className="navbar-brand" src="https://cdn.pixabay.com/photo/2016/01/13/02/03/byeongsinnyeon-1137035_960_720.png" alt='' width={52} height={50} />

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>


        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className=" d-flex align-items-center  navbar-nav me-auto mb-2 mb-lg-0 ">

            <div className=" d-flex nav-item me-5">

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
            </div>


            <div className=" nav-item ">
              <Search />
            </div>


            {isLogin ?

              <li className=" nav-item">
                <div className=" text-danger fs-5 btn">
                  Welcome  {user.fullName.toUpperCase()}
                </div>

                <button onClick={handLogout} className="btn btn-warning ">Logout</button>
              </li>

              :

              <div className="d-flex nav-item p-1 navbar-nav me-auto ms-5 mb-lg-0">
                <li className=" ">
                  <Link className="btn btn-outline-dark" to='/Login'>Login</Link>
                </li>

                <li className=" ">
                  <Link className="  btn  " to='/Register'>Register</Link>
                </li>
              </div>
            }

          </ul>
        </div>
      </div>
    </nav>

















    // <nav style={{ position: 'fixed', top: '0', width: '100%', zIndex: 1 }} className="navbar navbar-expand-lg navbar-light bg-info">
    //   <div className="container">
    //     <img src="https://cdn.pixabay.com/photo/2016/01/13/02/03/byeongsinnyeon-1137035_960_720.png" alt='' width={52} height={50} />

    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon" />
    //     </button>

    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">

    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <div className=" p-2 collapse navbar-collapse ">

    //           <ul className=" p-1 navbar-nav me-auto mb-2 mb-lg-0">

    //             <li className=" nav-item">
    //               <Link className="btn " to='/'>Home</Link>
    //             </li>

    //             <li className=" nav-item">
    //               <Link className="  btn  " to='/Pet'>Pet</Link>
    //             </li>



    //             {isLogin
    //               ?
    //               <li className=" position-relative nav-item">
    //                 <Link className="  btn  " to='/Cart'>
    //                   <i style={{ color: '#4E31AA' }} className={amount > 0 ? 'fa-beat fa-solid fa-xl fa-cart-arrow-down' : 'fa-solid fa-xl fa-cart-arrow-down'}></i>
    //                 </Link>
    //                 {amount > 0 && <BagdeCart amount={amount} />}
    //               </li>
    //               :
    //               <li className=" position-relative nav-item">
    //                 <Link className="  btn  " to='/Login'>
    //                   <i style={{ color: '#4E31AA' }} className='fa-solid fa-xl fa-cart-arrow-down'></i>
    //                 </Link>
    //               </li>
    //             }
    //           </ul>
    //         </div>


    //         <div className=" p-2 collapse navbar-collapse">

    //           <Search />
    //         </div>


    //         {isLogin ?
    //           <div className=" p-2 collapse navbar-collapse">
    //             <ul className=" d-flex align-items-center p-1 navbar-nav me-auto mb-2 mb-lg-0">

    //               <li className=" text-danger fs-5 btn nav-item">
    //                 Welcome  {user.fullName.toUpperCase()}
    //               </li>

    //               <li className=" nav-item">
    //                 <button onClick={handLogout} className="btn btn-warning ">Logout</button>
    //               </li>
    //             </ul>
    //           </div>

    //           :
    //           <div className=" p-2 collapse navbar-collapse">
    //             <ul className=" p-1 navbar-nav me-auto mb-2 mb-lg-0">

    //               <li className=" nav-item">
    //                 <Link className="btn btn-outline-dark" to='/Login'>Login</Link>
    //               </li>

    //               <li className=" nav-item">
    //                 <Link className="  btn  " to='/Register'>Register</Link>
    //               </li>
    //             </ul>
    //           </div>}

    //       </ul>




    //     </div>

    //   </div>

    // </nav>
  )
}
export { AmountContext, AmountProvider }
export default Header

