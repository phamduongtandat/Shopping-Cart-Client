import React, { useEffect, useState } from 'react'
import UsersTable from '../AdminTable/UsersTable'
import axios from 'axios';

function AdminUser() {
    const [userData, setUserData] = useState([])
    useEffect(() => {
        axios
            .get('https://shopping-cart-zjgb.onrender.com/api/v1/users')
            .then((api) => {
                setUserData(api.data.data)

            })
            .catch((err) => {
                console.log('err :', err)
            })
    }, [])

    return (
        <div>
            <h3><b>Users management</b></h3>

            <div>
                <UsersTable users={userData} />
            </div>

        </div>
    )
}

export default AdminUser
