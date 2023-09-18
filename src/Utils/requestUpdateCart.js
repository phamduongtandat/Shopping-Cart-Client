import axios from 'axios';
const requestUpdateCart = (petID, type) => {
    return axios.put('https://shopping-cart-zjgb.onrender.com/api/v1/cart/update-cart', { prodID: petID, type: type }, {
        headers: {
            Authorization: JSON.parse(localStorage.getItem("access_token"))
        }
    })
}


export default requestUpdateCart