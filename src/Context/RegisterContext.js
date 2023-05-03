import axios from "axios";
import { createContext, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
const RegisterContext = createContext();

const RegisterProvider = ({ children }) => {
    const navigate = useNavigate()
    //const [infoUser, setInfouser] = useState({ fullName: '', email: '', pass: '', confirm: '' });
    const [trigger, setTrigger] = useState({
        fullNameError: '',
        emailError: '',
        passError: 'Please fill password with minium 6 and maxium 20 letter,including at least 1 upper-case, number and special characters!!',
        confirmError: ''
    });
    const nameRef = useRef(null)
    const mailRef = useRef(null)
    const passRef = useRef(null)
    const CpassRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

        let nameValue = e.target.fullname.value
        let emailValue = e.target.email.value
        let passValue = e.target.password.value
        let confirmValue = e.target.password_confirmation.value
        let isEmail = reg.test(emailValue)
        let isPassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/.test(passValue)

        if (nameValue === '' || nameValue.length < 2 || nameValue.length > 6) {
            nameRef.current.focus()
            return setTrigger({ fullNameError: 'Please fill full name with at least 2 and maxium 6 letter' })
        } else if (!isEmail) {
            mailRef.current.focus()
            return setTrigger({ emailError: 'Please fill your E-mail exactly!!' })
        } else if (!isPassword) {
            passRef.current.focus()
            return setTrigger({ passError: 'Please fill password with minium 6 and maxium 20 letter,including at least 1 upper-case, number and special characters!!' })
        } else if (confirmValue !== passValue) {
            CpassRef.current.focus()
            return setTrigger({ confirmError: 'Not match your password', passError: '' })
        } else {

            const user = {
                username: nameValue,
                email: emailValue,
                password: passValue
            }
            axios.post('http://localhost:8080/api/v1/auth/sign-up', user)
                .then((res) => {
                    localStorage.setItem('user', JSON.stringify(user))
                    navigate('/Login')
                })
                .catch((err) => {
                    alert(err.response.data.message)
                    setTrigger({ emailError: err.response.data.message })
                })

        }
    }

    return (
        <RegisterContext.Provider value={{ handleSubmit, trigger, nameRef, mailRef, passRef, CpassRef }}>
            {children}
        </RegisterContext.Provider>)
};
export { RegisterContext, RegisterProvider } 