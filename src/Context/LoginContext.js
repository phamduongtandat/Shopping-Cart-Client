import { createContext, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import jwtDecode from "jwt-decode";

const LoginContext = createContext();
const LoginProvider = ({ children }) => {
    const navigate = useNavigate()
    //const [isLogin, setIsLogin] = useState(false);
    const [message, setMessage] = useState({ messEmail: '', messPass: '' });
    const mailRef = useRef(null)
    const passRef = useRef(null)
    const handleLogin = (e) => {
        e.preventDefault();
        //let user = JSON.parse(localStorage.getItem('user')) ?? ''
        let emailLogin = e.target.email.value
        let passLogin = e.target.password.value

        if (emailLogin === '') {
            mailRef.current.focus()
            return setMessage({ messEmail: 'Please fill your E-mail' })

        } else if (!passLogin) {
            passRef.current.focus()
            return setMessage({ messPass: 'Please fill your password' })
        }

        axios.post('http://localhost:8080/api/v1/auth/log-in', { email: emailLogin, password: passLogin }, { withCredentials: true })
            .then(res => {
                localStorage.setItem('access_token', JSON.stringify(res.data.data.access_token))

                const { isAdmin } = jwtDecode(res.data.data.access_token)

                if (isAdmin) {
                    console.log('Trang admin')
                }

                //       _____  _____

                axios.post('http://localhost:8080/api/v1/cart/add-cart', [], {
                    headers: {
                        Authorization: JSON.parse(localStorage.getItem("access_token"))
                    }
                })
                    .then((res) => { console.log('resAddCart :', res) }).catch((err) => {
                        console.log(' errAddCart:', err.response.data.message)
                    })

                //       _____  _____
                navigate('/')

            })
            .catch(err => {
                if (err.response.data.message === 'Incorrect input')
                    return setMessage({ messEmail: 'Not match please check Email or password', messPass: 'Not match please check Email or password' })

                console.log('err :', err.response.data)

            })


        // if (emailLogin === '') {
        //     mailRef.current.focus()
        //     return setMessage({ messEmail: 'Please fill your E-mail' })

        // } else if (!emailLogin.includes('@')) {
        //     setMessage({ messEmail: 'Please insert @ keyword', messPass: '' })
        //     mailRef.current.focus()

        // } else if (!passLogin) {
        //     setMessage({ messEmail: '', messPass: 'Please fill your password' })
        //     passRef.current.focus()

        // } else if (emailLogin !== user.email || passLogin !== user.pass) {
        //     setMessage({ messEmail: 'Not match please check Email or password', messPass: 'Not match please check Email or password' })
        //     passRef.current.focus()

        // } else {
        //     localStorage.setItem('isLogin', JSON.stringify(true))
        //     navigate('/')
        // }

    }


    return (
        <LoginContext.Provider value={{ handleLogin, message, passRef, mailRef }}>
            {children}
        </LoginContext.Provider>)
};
export { LoginContext, LoginProvider } 