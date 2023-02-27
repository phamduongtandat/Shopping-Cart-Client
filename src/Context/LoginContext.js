import { createContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
const LoginContext = createContext();
const LoginProvider = ({ children }) => {
    const navigate = useNavigate()
    //const [isLogin, setIsLogin] = useState(false);
    const [message, setMessage] = useState({ messEmail: '', messPass: '' });

    const handleLogin = (e) => {
        e.preventDefault();
        let user = JSON.parse(localStorage.getItem('user')) ?? ''
        let emailLogin = e.target.email.value
        let passLogin = e.target.password.value
        if (emailLogin === '') {
            setMessage({ ...message, messEmail: 'Please fill your E-mail' })
            return false
        } else if (!emailLogin.includes('@')) {
            setMessage({ messEmail: 'Please insert @ keyword', messPass: '' })
        } else if (!passLogin) {
            setMessage({ messEmail: '', messPass: 'Please fill your password' })
        } else if (emailLogin !== user.email || passLogin !== user.pass) {
            setMessage({ messEmail: 'Not match please check Email or password', messPass: 'Not match please check Email or password' })
        } else {
            localStorage.setItem('isLogin', JSON.stringify(true))
            //setIsLogin(true)
            navigate('/')
        }

    }


    return (
        <LoginContext.Provider value={{ handleLogin, message, }}>
            {children}
        </LoginContext.Provider>)
};
export { LoginContext, LoginProvider } 