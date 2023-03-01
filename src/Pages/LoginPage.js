import React from 'react'
import './RegisterPage.css'
import { useContext } from 'react';
import { LoginContext } from '../Context/LoginContext';
import Header from '../Component/Header';

function LoginPage() {

    const { handleLogin, message, passRef, mailRef } = useContext(LoginContext)
    return (
        <div>
            <Header />

            <div style={{ marginTop: "50px" }} className="main-frm">
                <form name="frmlogin" action='' method="POST" className="form" id="form-1" onSubmit={handleLogin} >
                    <h1 className="heading">Sign In</h1>
                    <p className="desc">PETSHOP Say Hi !!! ❤️</p>
                    <div className="spacer" ></div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input ref={mailRef} id="email" name="email" type="text" placeholder="VD: email@domain.com" className="form-control" />
                        <span id="email-error" >{message.messEmail}</span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input ref={passRef} id="password" name="password" type="password" placeholder="Enter your Password" className="form-control" />
                        <span id="password-error" >{message.messPass}</span>
                    </div>

                    <button type="submit" className="form-submit">Log In</button>
                </form>
            </div>
        </div>


    )
}

export default LoginPage
