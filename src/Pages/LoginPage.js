import React from 'react'
import './RegisterPage.css'
import { useContext } from 'react';
import { LoginContext } from '../Context/LoginContext';

function LoginPage() {

    const { handleLogin, message } = useContext(LoginContext)
    return (
        <div style={{ marginTop: "50px" }} className="main-frm">
            <form name="frmlogin" action='' method="POST" className="form" id="form-1" onSubmit={handleLogin} >
                <h1 className="heading">Sign In</h1>
                <p className="desc">PETSHOP Say Hi !!! ❤️</p>
                <div className="spacer" ></div>

                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input id="email" name="email" type="text" placeholder="VD: email@domain.com" className="form-control" />
                    <span id="email-error" >{message.messEmail}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input id="password" name="password" type="password" placeholder="Enter your Password" className="form-control" />
                    <span id="password-error" >{message.messPass}</span>
                </div>

                <button type="submit" className="form-submit">Log In</button>
            </form>
        </div>

    )
}

export default LoginPage
