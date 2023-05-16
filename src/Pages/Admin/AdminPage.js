import React from 'react'
import { UserOutlined, PicLeftOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import './AdminPage.css'
import AdminUser from '../../Component/AdminUser/AdminUser';
import AdminProduct from '../../Component/AdminProduct/AdminProduct';
function AdminPage() {
    const [keySelected, setKeySelected] = useState('')

    const renderPage = (key) => {
        switch (key) {
            case 'users':
                return (
                    <AdminUser />
                )
            case 'products':
                return (
                    <AdminProduct />
                )
            default:
                return <></>
        }
    }

    function getItem(label, key, icon, children, type) {
        return {
            key,
            icon,
            children,
            label,
            type,
        };
    }
    const items = [
        getItem('Users', 'users', <UserOutlined />),
        getItem('Products', 'products', <PicLeftOutlined />),

    ];

    //const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
    const handleOnCLick = ({ key }) => {
        setKeySelected(key)
    }


    return (
        <div className='d-flex'>
            <Menu
                mode="inline"
                onClick={handleOnCLick}
                style={{
                    width: 256,
                    height: 800,
                    boxShadow: '1px 1px 2px #ccc'
                }}
                items={items}
            />
            <div className='content'>
                {renderPage(keySelected)}
            </div>
        </div>
    )
}

export default AdminPage
