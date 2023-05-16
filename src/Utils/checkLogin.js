
import jwtDecode from "jwt-decode";

const checkLogin = () => {
    //let isLogin = false

    let access_token = JSON.parse(localStorage.getItem('access_token'))
    if (!access_token) {
        return { isLogin: false }
    }

    const user = jwtDecode(access_token)

    if (user.exp > new Date().getTime() / 1000) {
        return ({
            isLogin: true,
            user
        })
    } else {
        return { isLogin: false }
    }

}

export default checkLogin