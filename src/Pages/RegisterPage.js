import React from 'react'
import './RegisterPage.css'
import { useContext } from 'react';
import { RegisterContext } from '../Context/RegisterContext';

function RegisterPage() {
    const { handleSubmit, trigger } = useContext(RegisterContext)



    return (
        <div className="main-frm">
            <form name="frmlogin" action='' method="POST" className="form" id="form-1" onSubmit={handleSubmit}>
                <h1 className="heading">Sign Up</h1>
                <p className="desc">PETSHOP Say Hello ❤️</p>
                <div className="spacer" />
                <div className="form-group">
                    <label htmlFor="fullname" className="form-label">Full name</label>
                    <input id="fullname" name="fullname" type="text" placeholder="Ex: Firstname Last name" className="form-control" />
                    <span id="name-error" >{trigger.fullNameError}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input id="email" name="email" type="text" placeholder="Ex: email@domain.com" className="form-control" />
                    <span id="email-error" >{trigger.emailError}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input id="password" name="password" type="password" placeholder="Enter your password" className="form-control" />
                    <span id="password-error" >{trigger.passError}</span>
                </div>
                <div className="form-group">
                    <label htmlFor="password_confirmation" className="form-label">Confirm password</label>
                    <input id="password_confirmation" name="password_confirmation" placeholder="Confirm your password" type="password" className="form-control" />
                    <span id="pass_conf-error" >{trigger.confirmError}</span>
                </div>
                <button type="submit" className="form-submit">Submit</button>
            </form>
        </div>

    )
}

export default RegisterPage
