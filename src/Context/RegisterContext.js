import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
const RegisterContext = createContext();

const RegisterProvider = ({ children }) => {
    const navigate = useNavigate()
    //const [infoUser, setInfouser] = useState({ fullName: '', email: '', pass: '', confirm: '' });
    const [trigger, setTrigger] = useState({
        fullNameError: '',
        emailError: '',
        passError: '',
        confirmError: ''
    });
    const handleSubmit = (e) => {
        e.preventDefault()
        let nameValue = e.target.fullname.value
        let emailValue = e.target.email.value
        let passValue = e.target.password.value
        let confirmValue = e.target.password_confirmation.value
        if (nameValue === '') {
            setTrigger({ ...trigger, fullNameError: 'Please fill full name' })
        } else if (emailValue === '') {
            setTrigger({ ...trigger, fullNameError: '', emailError: 'Please fill E-mail' })
        } else if (!emailValue.includes('@')) {
            setTrigger({ ...trigger, fullNameError: '', emailError: 'Please insert @ keyword' })
        } else if (passValue === "" || (passValue.length) < 6) {
            setTrigger({ ...trigger, fullNameError: '', emailError: '', passError: 'Please fill password more than 6 word' })
        } else if (confirmValue === '') {
            setTrigger({
                ...trigger, fullNameError: '', emailError: '', passError: '', confirmError: 'Please fill Confirmation'
            })
        } else if (confirmValue !== passValue) {
            setTrigger({
                ...trigger, fullNameError: '', emailError: '', passError: '', confirmError: 'Not match your password'
            })
        } else {
            setTrigger({
                fullNameError: '',
                emailError: '',
                passError: '',
                confirmError: ''
            })
            const user = { fullName: nameValue, email: emailValue, pass: passValue, confirm: confirmValue }
            //setInfouser(user)
            localStorage.setItem('user', JSON.stringify(user))
            navigate('/Login')
        }

    }

    return (
        <RegisterContext.Provider value={{ handleSubmit, trigger }}>
            {children}
        </RegisterContext.Provider>)
};
export { RegisterContext, RegisterProvider } 